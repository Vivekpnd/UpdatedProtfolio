import { google } from "googleapis";

const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY;
const spreadsheetId = process.env.GOOGLE_SHEET_ID;

if (!clientEmail) {
  throw new Error("Missing GOOGLE_CLIENT_EMAIL");
}

if (!privateKey) {
  throw new Error("Missing GOOGLE_PRIVATE_KEY");
}

if (!spreadsheetId) {
  throw new Error("Missing GOOGLE_SHEET_ID");
}

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: clientEmail,
    private_key: privateKey.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({
  version: "v4",
  auth,
});

export async function addContact(
  name: string,
  email: string,
  subject: string,
  message: string
) {
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A:E",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[
        new Date().toLocaleString(),
        name,
        email,
        subject,
        message,
      ]],
    },
  });
}