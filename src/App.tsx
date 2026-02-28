import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { signOut } from 'aws-amplify/auth';

function App() {
  return (
    <Authenticator
      signUpAttributes={['email', 'name', 'phone_number']}
      loginMechanisms={['email']}
      formFields={{
        signUp: {
          email: {
            label: 'Email',
            placeholder: 'Enter your email',
            isRequired: true,
            order: 1,
          },
          name: {
            label: 'Name',
            placeholder: 'Enter your full name',
            isRequired: true,
            order: 2,
          },
          phone_number: {
            label: 'Mobile Number (Optional)',
            placeholder: '+91XXXXXXXXXX',
            isRequired: false,
            order: 3,
          },
        },
      }}
    >
      {({ user }) => <Dashboard user={user} />}
    </Authenticator>
  );
}

function Dashboard({ user }: any) {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Swavalambi</h1>
        <h2 style={styles.subtitle}>Skills to Self Reliance</h2>
      </header>

      <main style={styles.main}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>User Information</h3>
          <div style={styles.infoRow}>
            <span style={styles.label}>Email:</span>
            <span style={styles.value}>{user?.signInDetails?.loginId || 'N/A'}</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.label}>Name:</span>
            <span style={styles.value}>{user?.username || 'N/A'}</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.label}>User ID:</span>
            <span style={styles.value}>{user?.userId || 'N/A'}</span>
          </div>
        </div>

        <button onClick={() => signOut()} style={styles.button}>
          Logout
        </button>
      </main>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px',
  },
  header: {
    textAlign: 'center' as const,
    color: 'white',
    marginBottom: '40px',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    margin: '20px 0 10px',
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: '300',
    margin: '0',
  },
  main: {
    maxWidth: '500px',
    margin: '0 auto',
  },
  card: {
    background: 'white',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 0',
    borderBottom: '1px solid #eee',
  },
  label: {
    fontWeight: '600',
    color: '#666',
  },
  value: {
    color: '#333',
  },
  button: {
    width: '100%',
    padding: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'white',
    background: '#FF6B35',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
};

export default App;
