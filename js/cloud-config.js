// ☁️ Optional login and sync (⚙️ → Log ind og synkroniser).
// Login stays switched off (and nothing is loaded from Firebase) while PD2.FIREBASE is null.
// To switch it on, paste the web app config from the Firebase console
// (Project settings → Your apps → SDK setup and configuration → Config), e.g.
//   PD2.FIREBASE = { apiKey: "…", authDomain: "….firebaseapp.com", projectId: "…", appId: "…" };
// These values are not secret – access is protected by the Firestore security rules.
window.PD2 = window.PD2 || {};
PD2.FIREBASE = null;
