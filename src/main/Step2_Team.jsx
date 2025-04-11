import React from 'react';

const styles = {
  container: {
    padding: 16,
    marginTop: '120px', // Adjusted to your new pageContainer margin
    width: 'max-content', // Ensure it doesn't stretch too wide
  },
  label: {
    fontWeight: '600',
    fontSize: '14px', // Updated font size
    marginBottom: '6px',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '14px', // Updated font size
    borderRadius: '6px',
    border: '1px solid #a0bce0',
    backgroundColor: 'rgb(207, 220, 252)',
    color: 'black',
  },
  memberBlock: {
    marginBottom: '20px',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f8f9ff',
  },
  formContainer: {
    marginTop: '20px',
    backgroundColor: 'rgb(207, 220, 252)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
    maxWidth: '1000px', // Default max-width
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  backBtn: {
    alignSelf: 'flex-end',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: '#c0c0c0',
    color: 'black',
    marginBottom: '12px',
  },
  nextBtn: {
    alignSelf: 'flex-end',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: '#3a64d8',
    color: 'white',
  },
};

function Step2_Team({ data, onChange }) {
  const updateMember = (index, field, value) => {
    const updated = [...data.members];
    updated[index][field] = value;
    onChange({ ...data, members: updated });
  };

  return (
    <div style={styles.container}>
      <h2>Step 2: Team Details</h2>

      <div style={styles.formContainer}>
        <label style={styles.label}>Team Name:</label>
        <input
          type="text"
          style={styles.input}
          value={data.teamName}
          onChange={(e) => onChange({ ...data, teamName: e.target.value })}
        />

        {data.members.map((member, index) => (
          <div key={index} style={styles.memberBlock}>
            <h4>Member {index + 1}</h4>

            <label style={styles.label}>Name:</label>
            <input
              type="text"
              style={styles.input}
              value={member.name}
              onChange={(e) => updateMember(index, 'name', e.target.value)}
            />

            <label style={styles.label}>Gender:</label>
            <select
              style={styles.input}
              value={member.gender}
              onChange={(e) => updateMember(index, 'gender', e.target.value)}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label style={styles.label}>Phone:</label>
            <input
              type="tel"
              style={styles.input}
              value={member.phone}
              onChange={(e) => updateMember(index, 'phone', e.target.value)}
            />

            <label style={styles.label}>Email:</label>
            <input
              type="email"
              style={styles.input}
              value={member.email}
              onChange={(e) => updateMember(index, 'email', e.target.value)}
            />

            <label style={styles.label}>GitHub:</label>
            <input
              type="url"
              style={styles.input}
              value={member.github}
              onChange={(e) => updateMember(index, 'github', e.target.value)}
            />
          </div>
        ))}
        
        <button style={styles.backBtn}>Back</button>
        <button style={styles.nextBtn}>Next</button>
      </div>
    </div>
  );
}

export default Step2_Team;
