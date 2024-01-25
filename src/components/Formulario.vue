<template>
  <form class="container mt-5" @submit.prevent="submitForm">
    <div v-if="errors.length" class="alert alert-danger">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </div>

    <div class="form-group">
      <label for="fullName">Nombre Completo</label>
      <input class="form-control" id="fullName" v-model="fullName" type="text" name="fullName" @blur="validateName">
    </div>

    <div class="form-group">
      <label for="address">Dirección</label>
      <input class="form-control" id="address" v-model="address" type="text" name="address" @blur="validateAddress">
    </div>

    <div class="form-group">
      <label for="birthdate">Fecha de nacimiento</label>
      <input class="form-control" id="birthdate" v-model="birthdate" type="date" name="birthdate"
        @blur="validateBirthdate">
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input class="form-control" id="email" v-model="email" type="email" name="email" @blur="validateEmail">
    </div>

    <div class="form-group">
      <label for="phone">Telefono</label>
      <input class="form-control" id="phone" v-model="phone" type="tel" name="phone" @blur="validatePhone">
    </div>

    <div class="form-group">
      <label for="photo">Fotografia (PNG)</label>
      <input class="form-control-file" id="photo" type="file" accept="image/png" @change="validatePhoto">
    </div>

    <button type="submit" class="btn btn-primary">Enviar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      address: "",
      birthdate: "",
      email: "",
      phone: "",
      photo: null,
      errors: [],
    };
  },
  methods: {
    validateName() {
      const nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;
      if (!nameRegex.test(this.fullName)) {
        this.errors.push("Invalid name format");
      }
    },
    validateAddress() {
      // Validar dirección: Puedes implementar una lógica más compleja según tus necesidades
      if (this.address.trim() === "") {
        this.errors.push("Address is required");
      }
    },
    validateBirthdate() {
      const currentDate = new Date();
      const selectedDate = new Date(this.birthdate);
      const age = currentDate.getFullYear() - selectedDate.getFullYear();

      if (age < 18) {
        this.errors.push("You must be at least 18 years old");
      }
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) {
        this.errors.push("Invalid email address");
      }
    },
    validatePhone() {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(this.phone)) {
        this.errors.push("Invalid phone number format");
      }
    },
    validatePhoto() {
      const maxSizeInBytes = 3 * 1024 * 1024; // 3 MB
      if (this.photo && this.photo.size > maxSizeInBytes) {
        this.errors.push("Photo size must be less than 3 MB");
      }
    },
    submitForm() {
      // Limpiar los errores antes de cada envío
      this.errors = [];

      // Realizar validaciones
      this.validateName();
      this.validateAddress();
      this.validateBirthdate();
      this.validateEmail();
      this.validatePhone();
      this.validatePhoto();

      // Enviar formulario si no hay errores
      if (this.errors.length === 0) {
        // Aquí puedes enviar el formulario, por ejemplo, a través de una petición HTTP
        console.log("Formulario enviado con éxito");
      }
    },
  },
};
</script>
