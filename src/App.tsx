import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { signOut } from 'aws-amplify/auth';

function App() {
  return (
    <div style={styles.appContainer}>
      <div style={styles.authHeader}>
        <h1 style={styles.appTitle}>Swavalambi</h1>
        <p style={styles.appSubtitle}>Skills to Self Reliance</p>
      </div>
      <Authenticator
        signUpAttributes={['name']}
        formFields={{
          signUp: {
            name: {
              label: 'Name',
              placeholder: 'Enter your full name',
              isRequired: true,
              order: 1,
            },
          },
        }}
        components={{
          Header() {
            return null; // Hide default header since we have custom one
          },
        }}
      >
        {({ user }) => <Dashboard user={user} />}
      </Authenticator>
    </div>
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
            <span style={styles.label}>Login ID:</span>
            <span style={styles.value}>{user?.signInDetails?.loginId || 'N/A'}</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.label}>Username:</span>
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
  appContainer: {
    minHeight: '100vh',
    background: '#ffffff',
    padding: '20px',
  },
  authHeader: {
    textAlign: 'center' as const,
    marginBottom: '30px',
    paddingTop: '40px',
  },
  appTitle: {
    fontSize: '48px',
    fontWeight: 'bold',
    margin: '0',
    color: '#FF6B35',
  },
  appSubtitle: {
    fontSize: '20px',
    color: '#666',
    margin: '10px 0 0',
  },
  container: {
    minHeight: '100vh',
    background: '#ffffff',
    padding: '20px',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '40px',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    margin: '20px 0 10px',
    color: '#FF6B35',
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: '300',
    margin: '0',
    color: '#666',
  },
  main: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  card: {
    background: 'white',
    border: '2px solid #f0f0f0',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
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
    borderBottom: '1px solid #f0f0f0',
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
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
};

export default App;
