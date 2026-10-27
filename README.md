# Gastro Skin Care — Android/iOS-ready mobile app source

This is the Gastro Skin Care clinic information app plus a clinic operations workspace inspired by the feature categories in the supplied DRXStore ZIP. The pharmacy-specific workflows have been adapted into clinic-oriented modules; this project does not embed the original DRXStore PHP application or its database.

## Clinic details prefilled
- **Name:** GASTRO SKIN CARE
- **Phone / WhatsApp:** 8260180108 / +91 8260180108
- **Email:** gastroskincare@gmail.com
- **Website:** https://gastroskincare.netlify.app
- **Location label:** Bhubaneswar, Odisha
- **Directions:** Google Maps search for the clinic name and city. This is not a verified street address or map pin.

## Features included in this prototype

### Public clinic app
- Digestive health and skin care service information
- Appointment enquiry form that opens WhatsApp for review and sending
- Call, email, website and Google Maps search links
- Responsive layout, PWA manifest and service worker

### Clinic workspace (`www/management.html`)
- Dashboard and quick actions
- Appointment tracking and status updates
- Patient contact directory (administrative details only)
- Clinic services and indicative fees
- Medicine / supply inventory with batch and expiry fields
- Low-stock and expiry alerts
- CSV inventory import and CSV table export
- Stock adjustments with reason/history
- Supplier directory and purchase orders / receipt tracking
- Billing / POS-style invoice records, discounts, payment method and paid/pending status
- Invoice history and return/refund tracking
- Income / expense ledger
- Reports and invoice summaries
- Patient messages / follow-up log
- Patient portal overview and invoice-history summary
- Team directory with suggested roles (Admin, Reception, Billing, Inventory)
- Clinic settings, JSON export and local demo-data reset

## Important limitations — not production-ready for patient records
The workspace is a **front-end prototype**. Records are stored in browser local storage on the current device. There is no server database, real authentication, email verification, role enforcement, encrypted medical-record storage, cloud backup, multi-device sync, payment processing, or tax-compliant GST invoice generation. Role assignments are descriptive only. Do not enter real patient clinical information or rely on this as a production clinic management system until a secure backend, authentication, authorization, audit logging, backups and applicable privacy/legal requirements have been implemented and tested.

The app is not medical advice and does not diagnose or provide emergency services. Clinic services, fees, opening hours and clinician details must be verified by the clinic before publication.

## Preview
Open `www/index.html` in a browser for the public clinic app. Open `www/management.html` for the local operations prototype. For service-worker testing, serve `www` over localhost or HTTPS.

## Build Android APK
Requires Node.js, Android Studio and Android SDK/build tools.

```bash
npm install
npx cap add android       # first time only
npx cap sync android
npx cap open android
```

In Android Studio, use **Build > Build Bundle(s) / APK(s) > Build APK(s)** for a debug APK. Create a signed release build for distribution. Keep the signing key private.

## Build for iOS
Requires a Mac with Xcode and Apple signing setup.

```bash
npm install
npx cap add ios           # first time only
npx cap sync ios
npx cap open ios
```

Select a development team in Xcode, test on a simulator/device, and archive/sign for distribution. App Store release requires Apple's review and distribution process. An APK cannot be installed on iOS.

## Inventory CSV import
The inventory import accepts a CSV with a header row. Suggested columns are:
`name,category,batch,qty,cost,expiry,supplier`

Example template is included as `inventory-import-template.csv`. This simple importer expects comma-separated fields and does not support every CSV quoting edge case.

## Build an Android APK using GitHub Actions

This source archive is not itself an APK. The included workflow can compile a debug APK on GitHub's hosted Android build environment.

1. Create a repository on GitHub and upload the contents of this folder.
2. Open the repository's **Actions** tab.
3. Select **Build Gastro Skin Care Android APK** and click **Run workflow** (or push to `main`).
4. Wait for the workflow to finish successfully.
5. Open the completed workflow run and download the `gastro-skin-care-debug-apk` artifact.
6. Extract the artifact ZIP; it contains `app-debug.apk`. Transfer it to your Android phone and install it. Android may ask you to allow installation from that source.

This is a debug APK for testing, not a Play Store release. A release APK/AAB should be signed with a private signing key before distribution.

The build workflow requires network access on GitHub to install Node packages and Android build tools. It has not been executed from this workspace, so the APK is not yet compiled or verified here.
