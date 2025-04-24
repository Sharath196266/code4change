// submitForm.js
import  supabase  from './supabase';

export const uploadFileToBucket = async (bucket, file, filename) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(filename, file, {
      cacheControl: '3600',
      upsert: true,
    });
    console.log(filename)
  if (error) {
    throw new Error(`Upload to ${bucket} failed: ${error.message}`);
  }

  const { data: publicUrl } = supabase
    .storage
    .from(bucket)
    .getPublicUrl(filename);

  return publicUrl.publicUrl;
};

export const submitFormData = async (formData) => {
  try {
    const isHackathon = formData.event === 'Hackathon';

    // Upload files
    const ideaFileUrl = formData.ppt
      ? await uploadFileToBucket('ideafiles', formData.ppt, `ppt-${Date.now()}-${formData.name}.pdf`)
      : '';

    const paymentProofUrl = formData.paymentProof
      ? await uploadFileToBucket('paymentproofs', formData.paymentProof, `proof-${Date.now()}-${formData.name}.jpg`)
      : '';

    if (isHackathon) {
      const { error } = await supabase.from('hackathon').insert([
        {
          name: formData.fullName,
          phone: formData.phone,
          college: formData.college,
          address: formData.city,
          mail: formData.email,
          event: formData.event,
          git1: formData.github,
          member2: formData.members?.[0]?.name || '',
          member3: formData.members?.[1]?.name || '',
          member4: formData.members?.[2]?.name || '',
          phone2: formData.members?.[0]?.phone || '',
          phone3: formData.members?.[1]?.phone || '',
          phone4: formData.members?.[2]?.phone || '',
          git2: formData.members?.[0]?.github || '',
          git3: formData.members?.[1]?.github || '',
          git4: formData.members?.[2]?.github || '',
          idea: formData.idea,
          details: formData.description,
          ppt: ideaFileUrl,
          transaction: formData.transactionId,
          payment_proof: paymentProofUrl,
          track: formData.track,
          numMem:formData.numMembers+1,
          team_name:formData.teamName,
        }
      ]);

      if (error) throw error;
    } else {
      const { error } = await supabase.from('TechQuiz').insert([
        {
          name: formData.fullName,
          phone: formData.phone,
          college: formData.college,
          address: formData.city,
          mail: formData.email,
          payment_proof: paymentProofUrl,
          transaction: formData.transactionId,
          event: formData.event,
        }
      ]);

      if (error) throw error;
    }

    return { success: true };
  } catch (err) {
    return { success: false, message: err.message };
  }
};
