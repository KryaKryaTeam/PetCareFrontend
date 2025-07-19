<script setup>
import ContainerComp from "@/shared/components/containerComp.vue"
import FooterListing from "@/widget/footerListing.vue"
import HeaderListing from "@/widget/headerListing.vue"
</script>
<template>
    <HeaderListing />
    <ContainerComp>
        <div class="box">
            <h1>Privacy Policy for PetCare</h1>
            <p><em>Last updated: 7 July 2025</em></p>

            <h2>1. Introduction</h2>
            <p>
                Welcome to <strong>PetCare</strong> (“<em>PetCare</em>,” “<em>we</em>,” “<em>our</em>,” or
                “<em>us</em>”). We respect your privacy and are committed to protecting the personal data you share with
                us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                use PetCare (the “<em>Service</em>”), accessible worldwide.
            </p>
            <blockquote>
                <strong>Note:</strong> This document is provided for informational purposes only and does not constitute
                legal advice.
            </blockquote>

            <h2>2. Information We Collect</h2>
            <table border="1" cellpadding="6">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Details</th>
                        <th>Collected When</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Account Data</strong></td>
                        <td>
                            • Username (may be your Google account name)<br />
                            • Email address<br />
                            • Password (encrypted; used only for authentication)
                        </td>
                        <td>Account creation / login</td>
                    </tr>
                    <tr>
                        <td><strong>Pet Data</strong></td>
                        <td>
                            • Pet name, species, breed, age<br />
                            • Health notes, injection/vaccination records, medical documents
                        </td>
                        <td>When you add or update pet profiles</td>
                    </tr>
                    <tr>
                        <td><strong>Technical Data</strong></td>
                        <td>• IP address, browser type, device info</td>
                        <td>Automatically when using the Service</td>
                    </tr>
                    <tr>
                        <td><strong>Authentication Cookies</strong></td>
                        <td>• Refresh token cookie (HTTP-only) to keep you signed in</td>
                        <td>Upon login</td>
                    </tr>
                </tbody>
            </table>
            <p>We do <strong>not</strong> send marketing emails or collect payment data.</p>

            <h2>3. How We Use Your Information</h2>
            <p>We use your data to:</p>
            <ol>
                <li>Provide and maintain the Service.</li>
                <li>Authenticate users via Google OAuth 2.0 or password.</li>
                <li>Improve and troubleshoot our platform.</li>
                <li>Ensure security.</li>
                <li>Comply with legal obligations.</li>
            </ol>
            <p>
                <strong>Legal bases under the GDPR:</strong> Contract performance, legitimate interests, and legal
                obligations.
            </p>

            <h2>4. How We Share Information</h2>
            <p>We do <strong>not</strong> sell personal data. We share it only with:</p>
            <ul>
                <li><strong>Service Providers</strong> (e.g., Google for OAuth).</li>
                <li><strong>Legal Authorities</strong> when required.</li>
                <li><strong>In Business Transfers</strong> (e.g., mergers, acquisitions).</li>
            </ul>

            <h2>5. Cookies and Similar Technologies</h2>
            <table border="1" cellpadding="6">
                <thead>
                    <tr>
                        <th>Cookie</th>
                        <th>Purpose</th>
                        <th>Type</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>refresh</code></td>
                        <td>Stores secure refresh token to keep you logged in</td>
                        <td>HTTP-only, essential</td>
                        <td>Up to 3 days</td>
                    </tr>
                </tbody>
            </table>
            <p>
                You can manage cookies through your browser settings. Disabling this cookie may prevent login
                functionality.
            </p>

            <h2>6. Data Retention</h2>
            <ul>
                <li>
                    <strong>Account & Pet Data:</strong> Deleted <strong>immediately</strong> upon account deletion.
                </li>
                <li><strong>Logs:</strong> We do <strong>not</strong> store logs of user activity.</li>
                <li><strong>Backups:</strong> No personal data is retained after account deletion.</li>
            </ul>

            <h2>7. Data Security</h2>
            <p>We use best practices to protect your data:</p>
            <ul>
                <li>Encryption (TLS, secure password hashing).</li>
                <li>Limited access controls.</li>
                <li>Routine security monitoring.</li>
            </ul>
            <p>No system is 100% secure, but we strive to protect your information.</p>

            <h2>8. Your Rights</h2>
            <h3>All Users</h3>
            <p>You can request to:</p>
            <ul>
                <li>Access, correct, or delete your data</li>
                <li>Object to processing or withdraw consent</li>
                <li>Export your data (data portability)</li>
            </ul>
            <h3>GDPR / CCPA / LGPD</h3>
            <p>
                We comply with EU GDPR, California CCPA, and other global privacy laws.<br />
                Email us to exercise your rights: <strong>webtoweb56@gmail.com</strong>
            </p>

            <h2>9. Children’s Privacy</h2>
            <p>
                PetCare is intended for users <strong>aged 13 and above</strong>.<br />
                While our app is not inappropriate, it allows uploading personal medical records for pets. Therefore, to
                comply with privacy laws (COPPA, GDPR-K), we do
                <strong>not knowingly allow users under 13 without parental consent</strong>.
            </p>
            <p>If we learn a child under 13 has registered without permission, we will delete the account and data.</p>

            <h2>10. International Transfers</h2>
            <p>
                Your data may be transferred outside your country. We use standard contractual clauses or equivalent
                legal safeguards to protect it.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
                We may update this Privacy Policy. Changes will be posted here with a new “last updated” date. For major
                changes, we may notify you via email or app.
            </p>

            <h2>12. Contact Us</h2>
            <p>If you have any questions:</p>
            <p>📧 Email: <a href="mailto:webtoweb56@gmail.com">webtoweb56@gmail.com</a></p>

            <p>
                <em
                    >PetCare may provide AI-generated suggestions. For legal disclaimers, see our
                    <a href="/listing/terms">Terms of Use</a>.</em
                >
            </p>
        </div>
    </ContainerComp>
    <FooterListing />
</template>

<style lang="scss" scoped>
.box {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    padding-top: 50px;
    padding-bottom: 50px;
}
h1 {
    font-size: 32px;
    font-weight: 500;
    font-family: "Montserrat";
    letter-spacing: 10%;
    line-height: 170%;
    color: #1f1f1f;
}
h2 {
    font-size: 24px;
    font-weight: 500;
    font-family: "Montserrat";
    letter-spacing: 10%;
    line-height: 170%;
    color: #1f1f1f;
}
h3 {
    font-size: 20px;
    font-weight: 500;
    font-family: "Montserrat";
    letter-spacing: 10%;
    line-height: 170%;
    color: #1f1f1f;
}
p {
    font-size: 16px;
    font-weight: 300;
    font-family: "Inter";
    letter-spacing: 10%;
    line-height: 170%;
    color: #1f1f1f;
}
table {
    border: #1f1f1f 3px solid;
    color: #1f1f1f;
    padding: 10px;
    font-family: "Inter";
    thead {
        height: 50px;
        background-color: #209aa6;
        border: #1f1f1f 2px solid;
        color: white;
        font-size: 16px;
        font-weight: 400;
    }
    td {
        border: #1f1f1f 2px solid;
        text-align: center;
        padding: 20px 0px;
        font-size: 12px;
        font-weight: 400;
    }
    th {
        border: #1f1f1f 2px solid;
        text-align: center;
        padding: 20px 0px;
    }
}
ul {
    color: #1f1f1f;
    font-family: "Inter";
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    border: 2px #1f1f1f solid;
    li {
        border: 2px #1f1f1f solid;
        padding: 20px 0px;
    }
}
ol {
    color: #1f1f1f;
    font-family: "Inter";
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    border: 2px #1f1f1f solid;
    li {
        border: 2px #1f1f1f solid;
        padding: 20px 0px;
    }
}
strong {
    font-weight: 800;
}
em {
    font-style: italic;
}
blockquote {
    background-color: #209aa6;
    border-radius: 15px;
    padding: 20px;
    font-family: "Inter";
}
</style>
