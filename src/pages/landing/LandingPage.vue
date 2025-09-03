<script lang="ts" setup>
import Card1 from '@/shared/landing/CardLanding1.vue'
import Card2 from '@/shared/landing/CardLanding2.vue'
import Button from '@/shared/ui/UiButton.vue'
import Card3 from '@/shared/landing/CardLanding3.vue'
import Review from '@/shared/landing/ReviewLanding.vue'
</script>

<template>
  <section class="hero" id="home">
    <div class="content">
      <h1 class="title">
        <span class="bold">PetCare</span> — caring for your pet's health, made simple
      </h1>
      <p class="subtitle">
        A digital health journal for your furry friend with smart AI-based care suggestions.
      </p>
      <RouterLink to="/app/auth/singup"
        ><Button><p class="btnContent">Get started</p></Button></RouterLink
      >
    </div>
    <img src="/images/girl1.png" class="img" />
  </section>
  <section class="feature1" id="features">
    <h2 class="title">What PetCare helps you with</h2>
    <div class="row">
      <Card1 text="Track your pet’s health in a structured journal." imgUrl="/images/il1.svg" />
      <Card1 text="Upload and keep all medical documents in one place." imgUrl="/images/il2.svg" />
      <Card1 text="Set reminders for vaccinations, meds, and checkups." imgUrl="/images/il3.svg" />
      <Card1
        text="AI care tips based on your notes (to discuss with your vet)."
        imgUrl="/images/il4.svg"
      />
    </div>
  </section>
  <section class="feature2">
    <h2 class="title">Features of the Platform</h2>
    <div class="row">
      <Card2 text="Online journal for observations and symptoms." imgUrl="/images/icon1.svg" />
      <Card2
        text="Uploading of documents, prescriptions, and test result photos."
        imgUrl="/images/icon2.svg"
      />
      <Card2
        text="Advice based on entered data (no diagnosis provided)."
        imgUrl="/images/icon3.svg"
      />
      <Card2 text="Smart reminders about important events." imgUrl="/images/icon4.svg" />
      <Card2 text="Secure storage of the pet's full medical history." imgUrl="/images/icon5.svg" />
    </div>
  </section>
  <section class="feature3">
    <h2 class="title">What do I need this for?</h2>
    <div class="row">
      <Card3 text="All about your pet’s health — in one place." imgUrl="/images/il5.svg" />
      <Card3 text="No more forgotten vaccination dates." imgUrl="/images/il6.svg" />
      <Card3 text="Care and monitoring tips — tailored for you." imgUrl="/images/il7.svg" />
      <Card3 text="Data safety and privacy." imgUrl="/images/il8.svg" />
      <Card3 text="Quick access to symptom history before a vet visit." imgUrl="/images/il9.svg" />
    </div>
  </section>
  <section class="important">
    <div class="content">
      <h2 class="title">Important to know</h2>
      <p class="text">
        <span class="bold">PetCare</span> does not replace a consultation with a veterinarian. We
        help you monitor your pet’s health, organize records, and provide recommendations based on
        your data. Final decisions should always be made together with a professional.
      </p>
    </div>
    <img class="image" src="/images/image.png" />
  </section>
  <section class="reviews" id="reviews">
    <h2 class="title">What do pet owners say?</h2>
    <div class="row">
      <Review
        imgUrl="/images/image2.png"
        content="“When my cat got sick, I remembered the old symptoms thanks to my notes in PetCare. It helped the vet figure things out faster.”"
        author="— Yurii, owner of Lord the cat"
        :rating="4"
      />
      <Review
        imgUrl="/images/image3.png"
        content="“With PetCare, I finally started keeping track of all my dog’s health records. Everything’s at my fingertips, and nothing gets forgotten.”"
        author="— Oksana, owner of a spaniel named Richie"
        :rating="5"
      />
    </div>
  </section>
  <section class="action">
    <div class="content">
      <h2 class="title">Start taking care today</h2>
      <p class="text">
        Your beloved pet deserves love and care. PetCare helps you provide it effortlessly.
      </p>
      <RouterLink to="/app/auth/singup"
        ><Button><p class="btn">Create a journal</p></Button></RouterLink
      >
    </div>
    <img class="image" src="/images/image4.png" />
  </section>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 90vh;
  .content {
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    color: #1f1f1f;
    .btnContent {
      width: 250px;
      padding: 0%;
      height: auto;
      text-align: center;
      margin: 0%;
    }
    .title {
      font-size: 50px;
      font-weight: 500;
      font-family: 'Montserrat';
      line-height: 150%;
      .bold {
        font-weight: 800;
      }
    }
    .subtitle {
      font-size: 16px;
      font-weight: 400;
      font-family: 'Inter';
      line-height: 170%;
      letter-spacing: 10%;
      color: #1f1f1f;
    }
  }
  .img {
    height: 90%;
  }
}

.title {
  font-family: 'Montserrat';
  font-size: 36px;
  font-weight: 700;
  color: #1f1f1f;
}

.feature1 {
  width: 100%;
  height: max-content;
  display: flex;
  row-gap: 50px;
  flex-direction: column;
  margin-top: 100px;
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 20px;
  }
}

.feature2 {
  margin-top: 100px;
  .row {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    row-gap: 30px;
  }
}
.feature3 {
  margin-top: 100px;
  .row {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
    row-gap: 30px;
  }
}

.important {
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .content {
    width: 40%;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    .text {
      line-height: 200%;
      letter-spacing: 10%;
      color: #514f4d;
      font-size: 20px;
      font-family: 'Inter';
      font-weight: 400;
      .bold {
        color: #1f1f1f;
        font-weight: 800;
      }
    }
  }
  .image {
    width: 50%;
    border-radius: 15px;
  }
}
.reviews {
  margin-top: 100px;
  .row {
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
}
.action {
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .content {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    row-gap: 30px;
    .text {
      font-family: 'Inter';
      font-weight: 400;
      font-size: 20px;
      color: #514f4d;
      line-height: 200%;
      letter-spacing: 10%;
    }
    .btn {
      width: 250px;
    }
  }
  .image {
    width: 50%;
  }
}
</style>
