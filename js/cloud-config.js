// ☁️ Optional login and sync (⚙️ → Log ind og synkroniser).
// Set PD2.FIREBASE to null to switch login off again (nothing is then loaded from Firebase).
// To switch it on, paste the web app config from the Firebase console
// (Project settings → Your apps → SDK setup and configuration → Config), e.g.
//   PD2.FIREBASE = { apiKey: "…", authDomain: "….firebaseapp.com", projectId: "…", appId: "…" };
// These values are not secret – access is protected by the Firestore security rules.
window.PD2 = window.PD2 || {};
PD2.FIREBASE = {
  apiKey: "AIzaSyCNRCfn08sq-NEZ7qjKfaW2Y5BQT2Rs1wU",
  authDomain: "danskklar.firebaseapp.com",
  projectId: "danskklar",
  storageBucket: "danskklar.firebasestorage.app",
  messagingSenderId: "336469612180",
  appId: "1:336469612180:web:fbe726894d32d988e68681"
};
