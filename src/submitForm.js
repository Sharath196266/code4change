// submitForm.js
import  supabase  from './supabase';

export const uploadFileToBucket = async (bucket, file, filename) => {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(filename, file, {
      cacheControl: '3600',
      upsert: true,
    });

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
    const ideaFileUrl = formData.ideaFile
      ? await uploadFileToBucket('ideafiles', formData.ideaFile, `ppt-${Date.now()}-${formData.name}.pdf`)
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
          member2: formData.member2,
          member3: formData.member3,
          member4: formData.member4,
          phone2: formData.phone2,
          phone3: formData.phone3,
          phone4: formData.phone4,
          git1: formData.github1,
          git2: formData.github2,
          git3: formData.github3,
          git4: formData.github4,
          idea: formData.ideaTitle,
          details: formData.ideaDesc,
          ppt: ideaFileUrl,
          transaction: formData.transactionId,
          payment_proof: paymentProofUrl,
          track: formData.track,
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
