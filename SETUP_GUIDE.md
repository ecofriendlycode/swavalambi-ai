# Swavalambi Setup Guide

## Step 1: Install Dependencies

```bash
cd swavalambi-web
npm install
```

## Step 2: Start Cloud Sandbox (Creates Backend in AWS)

```bash
npx ampx sandbox
```

This will:
- Create Cognito User Pool with phone OTP
- Generate real `amplify_outputs.json`
- Take ~5 minutes

## Step 3: Start Development Server

In a new terminal:

```bash
npm run dev
```

Visit: http://localhost:5173

## Step 4: Test the App

1. Click "Create Account"
2. Enter:
   - Mobile: +91XXXXXXXXXX
   - Name: Your Name
   - Age: 25
3. Verify OTP (sent to phone)
4. Login with phone + OTP
5. See user dashboard
6. Click Logout

## Step 5: Push to GitHub

```bash
git add .
git commit -m "Initial Swavalambi app"
git remote add origin https://github.com/YOUR_USERNAME/swavalambi-web.git
git push -u origin main
```

## Step 6: Deploy to AWS Amplify

### Option A: Via Console
1. Go to AWS Amplify Console
2. Click "New app" → "Host web app"
3. Connect GitHub
4. Select `swavalambi-web` repo
5. Amplify auto-deploys!

### Option B: Via CLI
```bash
npx ampx deploy --branch main
```

## Troubleshooting

### SMS OTP not working?
- AWS SNS needs SMS enabled
- Check AWS Console → SNS → Text messaging (SMS)
- May need to request spending limit increase

### Sandbox fails?
- Check AWS credentials: `aws sts get-caller-identity`
- Make sure region supports Cognito

### Build fails?
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

## What's Included

✅ Phone OTP authentication  
✅ Custom signup fields (Name, Age, Mobile)  
✅ Beautiful gradient UI  
✅ User dashboard  
✅ Logout functionality  
✅ TypeScript  
✅ Vite for fast dev  

## Next Steps

- Add more pages (Dashboard, Profile, etc.)
- Integrate with backend APIs
- Add data storage
- Deploy to production
