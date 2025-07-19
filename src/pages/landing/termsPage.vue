<script setup>
import ContainerComp from "@/shared/components/containerComp.vue"
import FooterListing from "@/widget/footerListing.vue"
import HeaderListing from "@/widget/headerListing.vue"
</script>

<template>
    <HeaderListing />
    <ContainerComp>
        <div class="box">
            <h1>Terms of Use for PetCare</h1>
            <p><em>Last updated: July 18, 2025</em></p>

            <h2>1. Introduction</h2>
            <p>
                Welcome to <strong>PetCare</strong> ("we", "us", or "our"). These Terms of Use ("Terms") govern your
                access to and use of our pet health management platform, including any content, features, and services
                (collectively, the "Service"). By using the Service, you agree to be bound by these Terms.
            </p>

            <h2>2. Eligibility</h2>
            <p>
                You must be at least 13 years old to use the Service. By using PetCare, you confirm that you meet this
                age requirement and are legally allowed to enter into a binding contract under applicable laws.
            </p>

            <h2>3. User Accounts</h2>
            <p>
                To access certain features, you must create an account using an email/password or through Google OAuth.
                You are responsible for maintaining the confidentiality of your account information and for all
                activities that occur under your account. If you signed up via Google, password login is not available
                and vice versa.
            </p>

            <h2>4. Features</h2>
            <p>Our Service includes the ability to:</p>
            <ul>
                <li>Upload and manage pet profiles (e.g., name, avatar, age, breed, weight)</li>
                <li>Track health records, injections, and medical documents</li>
                <li>Store private notes about your pets</li>
                <li>Receive AI-generated health suggestions</li>
                <li>Manage your user account and session data</li>
            </ul>

            <h2>5. Use of AI Suggestions</h2>
            <p>
                PetCare may provide AI-based recommendations. These are for informational purposes only and
                <strong>do not constitute medical advice</strong>. Always consult a licensed veterinarian before making
                decisions regarding your pet’s health. We do not take responsibility for actions taken based on AI
                suggestions.
            </p>

            <h2>6. Availability</h2>
            <p>
                PetCare is provided as an open-source platform. While we strive to ensure reliability, we do not
                guarantee uninterrupted service. Outages, bugs, or data loss may occur. You agree to use the Service "as
                is" and at your own risk.
            </p>

            <h2>7. Data Protection</h2>
            <p>
                We respect your privacy. All data processing is done in accordance with our
                <a href="/privacy.html">Privacy Policy</a>. We comply with applicable laws, including the GDPR (EU) and
                relevant Ukrainian legislation.
            </p>

            <h2>8. Changes to the Service</h2>
            <p>
                We may add, remove, or modify features at any time without prior notice. Your continued use of the
                Service after such changes constitutes your acceptance of the new terms.
            </p>

            <h2>9. Termination</h2>
            <p>
                We reserve the right to suspend or delete your account if you violate these Terms, misuse the Service,
                or for any reason at our sole discretion. You may also delete your account at any time.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
                To the fullest extent permitted by law, PetCare shall not be liable for any indirect, incidental, or
                consequential damages arising out of your use or inability to use the Service, including reliance on AI
                suggestions, data loss, or system outages.
            </p>

            <h2>11. Future Services</h2>
            <p>
                PetCare is currently free to use. We reserve the right to introduce premium features or paid plans in
                the future with updated Terms of Use.
            </p>

            <h2>12. Governing Law</h2>
            <p>
                These Terms are governed by the laws of Ukraine. Disputes shall be resolved through Ukrainian courts or
                another competent jurisdiction under applicable law.
            </p>

            <h2>13. Contact Us</h2>
            <p>
                If you have any questions about these Terms, please contact us at:
                <a href="mailto:webtoweb56@gmail.com">webtoweb56@gmail.com</a>
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
