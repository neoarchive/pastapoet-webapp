<template>
  <section class="contact my-5">
    <h2 class="fw-bold mb-4 text-center">Contact Us</h2>
    
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="submitForm" class="p-4 border rounded shadow-sm bg-light">
          <div class="mb-3">
            <label for="name" class="form-label fw-semibold">Name</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="form-control"
              placeholder="Your full name"
              required
            >
          </div>

          <div class="mb-3">
            <label for="email" class="form-label fw-semibold">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="form-control"
              placeholder="you@example.com"
              required
            >
          </div>

          <div class="mb-3">
            <label for="message" class="form-label fw-semibold">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              class="form-control"
              rows="5"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>

          <button type="submit" class="btn btn-dark w-100">Send Message</button>

          <p v-if="successMessage" class="mt-3 text-success text-center">
            {{ successMessage }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      successMessage: ''
    }
  },
  methods: {
    submitForm() {
      // Here you can add actual submission logic via API or email service
      console.log('Form submitted:', this.form)
      
      // Clear the form
      this.form.name = ''
      this.form.email = ''
      this.form.message = ''
      
      // Show success message
      this.successMessage = 'Thank you! Your message has been sent.'
      
      // Hide message after 3 seconds
      setTimeout(() => {
        this.successMessage = ''
      }, 3000)
    }
  }
}
</script>

<style scoped>
.contact h2 {
  font-family: 'Poppins', sans-serif;
}

.contact form {
  background-color: #fff;
}

.contact input,
.contact textarea {
  font-family: 'Poppins', sans-serif;
}

.contact button {
  font-family: 'Poppins', sans-serif;
}
</style>
