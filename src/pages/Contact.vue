<template>
  <Layout>
    <div class="wrapper">
      <h1>Contact</h1>
    <form name="contact" method="POST" @submit.prevent="handleSubmit">
        <b-field horizontal label="Subject">
            <b-input name="subject" v-model="subject" expanded></b-input>
        </b-field>

        <b-field horizontal label="From">
            <b-input name="name" type="name" v-model="name" placeholder="Name" expanded></b-input>
            <b-input name="email" type="email" v-model="email" placeholder="nobody@nowhere.com" expanded></b-input>
        </b-field>

        <b-field horizontal label="Message">
            <b-input name="message" v-model="message" type="textarea"></b-input>
        </b-field>

        <b-field horizontal><!-- Label left empty for spacing -->
            <p class="control">
              <button type="submit" class="button is-primary">
                Send message
              </button>
            </p>
        </b-field>

    </form>
    </div>
  </Layout>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      subject: '',
      name: '',
      email: '',
      message: ''
    }
  },
  mounted () {
  },
  methods: {
    handleSubmit () {
      const self = this
      const payload = {
        subject: this.subject,
        name: this.name,
        email: this.email,
        message: this.message
      }
      console.log(payload)
      const url = process.env.GRIDFUL_CONTACTHOOK
      console.log(url)
      // return
      fetch(process.env.GRIDFUL_CONTACTHOOK, {
        method: 'post',
        body: JSON.stringify(payload)
      }).then(function(response) {
        return response.json();
      }).then(function(data) {
          console.log('Contact success:', data)
          self.$router.push('/thanks')
      }).catch(function (error) {
        console.log(error)
        self.$router.push('/oops')
      })

          /*
      axios.post(url, payload)
        .then(() => {
          console.log('contact success')
          self.$router.push('/thanks')
        })
        .catch(function (error) {
          console.log(error)
          self.$router.push('/oops')
        })
      */
    }
  }
}
</script>
