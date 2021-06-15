<template>
	<div class='register-tekre88gw7 col-xs-12'>
		<div class='container register-dc7oru6p5'>
			<div class='row register-ct4hvemnrb'>
				<div class='col-sm-9 col-md-7 col-lg-5 register-cn13o8vwpc'>
					<div class='card card-signin my-5'>
						<div class='card-body'>
							<h5 class='card-title text-center'>Create account</h5>
							<form @submit.prevent='register'>
								<div class='form-group'>
									<label for='inputEmail'>Email address</label>
									<input type='email' v-model='form.email' id='inputEmail' class='form-control' placeholder='Email address'>
								</div>

								<div class='form-group'>
									<label for='inputPassword'>Password</label>
									<input type='password' id='inputPassword' class='form-control' placeholder='Password'>
									<input type='password' v-model='form.password_confirmation' id='inputPasswordConfirm' class='form-control' placeholder='Password'>
								</div>
								<button class='btn btn-lg btn-primary btn-block text-uppercase' type='submit'>Sign up</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {AuthClient} from '@clients/AuthClient';

	export default {
		data() {
			return {
				form: {
					email: null,
					password: null,
					password_confirmation: null
				}
			}
		},

		methods: {
			register() {
				AuthClient.register(this.form).then((response) => {

				});
			}
		}
	}
</script>