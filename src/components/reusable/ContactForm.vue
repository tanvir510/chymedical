<template>
  <form class="form_area" @submit.prevent="submitForm">
    <div class="form_group">
      <input
        type="text"
        id="formFirstName"
        placeholder="First Name"
        v-model="formData.firstName"
        :class="errors.firstName.status ? 'is-invalid' : 'form-control'"
        v-on:change="inputValidate('firstName', false, '')"
        v-on:input="inputValidate('firstName', false, '')"
        v-on:blur="
          inputValidate(
            'firstName',
            formData.firstName === '',
            'First name is required!'
          )
        "
      />
      <span class="error_feedback" v-if="errors.firstName.status">
        {{
        errors.firstName.message
        }}
      </span>
    </div>
    <div class="form_group">
      <input
        type="text"
        id="formLastName"
        placeholder="Last Name"
        v-model="formData.lastName"
        :class="errors.lastName.status ? 'is-invalid' : 'form-control'"
        v-on:change="inputValidate('lastName', false, '')"
        v-on:input="inputValidate('lastName', false, '')"
        v-on:blur="
          inputValidate(
            'lastName',
            formData.lastName === '',
            'Last name is required!'
          )
        "
      />
      <span class="error_feedback" v-if="errors.lastName.status">
        {{
        errors.lastName.message
        }}
      </span>
    </div>
    <div class="form_group">
      <input
        type="email"
        id="formEmail"
        placeholder="Email"
        v-model="formData.email"
        :class="errors.email.status ? 'is-invalid' : 'form-control'"
        v-on:change="inputValidate('email', false, '')"
        v-on:input="inputValidate('email', false, '')"
        v-on:blur="
          inputValidate(
            'email',
            formData.email === '',
            'Email is required!'
          )
        "
      />
      <span class="error_feedback" v-if="errors.email.status">
        {{
        errors.email.message
        }}
      </span>
    </div>
    <div class="form_group">
      <input
        type="text"
        id="formnNumber"
        placeholder="Phone Number"
        v-model="formData.number"
        :class="errors.number.status ? 'is-invalid' : 'form-control'"
        v-on:change="inputValidate('number', false, '')"
        v-on:input="inputValidate('number', false, '')"
        v-on:blur="
          inputValidate(
            'number',
            formData.number === '',
            'Phone number is required!'
          )
        "
      />
      <span class="error_feedback" v-if="errors.number.status">
        {{
        errors.number.message
        }}
      </span>
    </div>
    <div class="form_group">
      <select
        id="formGender"
        v-model="formData.gender"
        :class="errors.gender.status ? 'is-invalid' : 'form-control'"
        v-on:change="inputValidate('gender', false, '')"
        v-on:input="inputValidate('gender', false, '')"
        v-on:blur="
          inputValidate(
            'gender',
            formData.gender === '',
            'Gender is required!'
          )
        "
      >
        <option value>Select your gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <span class="error_feedback" v-if="errors.gender.status">
        {{
        errors.gender.message
        }}
      </span>
    </div>
    <div class="form_group">
      <input
        type="date"
        id="formDate"
        placeholder="Appointment Date"
        v-model="formData.date"
        :class="errors.date.status ? 'is-invalid' : 'form-control'"
        v-on:change="inputValidate('date', false, '')"
        v-on:input="inputValidate('date', false, '')"
        v-on:blur="
          inputValidate(
            'date',
            formData.date === '',
            'Date is required!'
          )
        "
      />
      <span class="error_feedback" v-if="errors.date.status">
        {{
        errors.date.message
        }}
      </span>
    </div>
    <div class="form_group full_width">
      <textarea
        type="text"
        id="formMessage"
        placeholder="Message"
        v-model="formData.message"
        :class="errors.message.status ? 'is-invalid' : 'form-control'"
        v-on:change="inputValidate('message', false, '')"
        v-on:input="inputValidate('message', false, '')"
        v-on:blur="
          inputValidate(
            'message',
            formData.message === '',
            'Message is required!'
          )
        "
      ></textarea>
      <span class="error_feedback" v-if="errors.message.status">
        {{
        errors.message.message
        }}
      </span>
    </div>
    <div class="submit_btn full_width">
      <button class="custom_btn">Sumbit</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        gender: "",
        date: "",
        message: ""
      },
      errors: {
        firstName: {
          message: "",
          status: false
        },
        lastName: {
          message: "",
          status: false
        },
        email: {
          message: "",
          status: false
        },
        number: {
          message: "",
          status: false
        },
        gender: {
          message: "",
          status: false
        },
        date: {
          message: "",
          status: false
        },
        message: {
          message: "",
          status: false
        }
      }
    };
  },
  methods: {
    submitForm() {
      console.log(this.formData);
      this.showError();
      // this.resetForm();
      return this.formData;
    },
    // resetForm() {
    //   for (var key in this.formData) {
    //     this.formData[key] = "";
    //   }
    // },
    inputValidate(key, status, message) {
      this.errors[key] = {
        status,
        message
      };
    },
    formCheck() {
      const {
        firstName,
        lastName,
        email,
        number,
        gender,
        date,
        message
      } = this.formData;
      let valueCheck =
        firstName && lastName && email && number && gender && date && message
          ? false
          : true;

      return (
        valueCheck ||
        this.errors.firstName.status ||
        this.errors.lastName.status ||
        this.errors.email.status ||
        this.errors.number.status ||
        this.errors.gender.status ||
        this.errors.date.status ||
        this.errors.message.status
      );
    },
    showError() {
      for (var key in this.formData) {
        if (this.formData[key] == "") {
          this.errors[key].status = true;
          this.errors[key].message = "This field is required";
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form_area {
  flex: 50%;
  padding-left: 25px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;

  .form_group {
    flex: 50%;
    box-sizing: border-box;
    display: flex;
    margin-bottom: 25px;
    position: relative;

    &:nth-child(odd) {
      padding-right: 8px;
    }
    &:nth-child(even) {
      padding-left: 8px;
    }
    &.full_width {
      padding-right: 0;
    }
    input,
    select,
    textarea,
    .form-control {
      width: 100%;
      padding: 11px 14px;
      font-size: 13px;
      line-height: 20px;
      border-radius: 3px;
      background-color: transparent;
      border: 1.4px solid #ddd;
      box-shadow: none;
      transition: all ease-in-out 150ms;
      color: #555;
    }
    textarea {
      height: 140px;
    }
    .error_feedback {
      position: absolute;
      bottom: -18px;
      color: red;
      font-size: 13px;
      right: 4%;
    }
    .is-invalid {
      border: 1.4px solid red;
    }
  }
  .full_width {
    flex: 100%;
  }
  .submit_btn {
    .custom_btn {
      background: #2fa5eb;
      color: #fff;
      cursor: pointer;
      display: block;
      width: 100%;
      &:hover {
        background: #288cc8;
      }
      &:disabled {
        opacity: 0.3;
      }
    }
  }
}
*:focus::-webkit-input-placeholder {
  color: transparent;
  transition: 0.35s ease-in-out;
}
*:focus:-moz-placeholder {
  color: transparent;
  transition: 0.35s ease-in-out;
} /* FF 4-18 */
*:focus::-moz-placeholder {
  color: transparent;
  transition: 0.35s ease-in-out;
} /* FF 19+ */
*:focus:-ms-input-placeholder {
  color: transparent;
  transition: 0.35s ease-in-out;
} /* IE 10+ */
</style>
