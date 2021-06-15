<template>
	<div class='login-tekre88gw7 col-xs-12'>
		<div class='container login-dc7oru6p5'>
			<div class='row login-ct4hvemnrb'>
				<div class='col-sm-9 col-md-7 col-lg-5 login-cn13o8vwpc'>
					<div class='card card-signin my-5'>
						<div class='card-body'>
							<h5 class='card-title text-center'>Sign In</h5>
							<form @submit.prevent='login'>
								<div class='form-group'>
									<label for='inputEmail'>Email address</label>
									<input type='email' v-model='form.email' id='inputEmail' class='form-control' placeholder='Email address'>
								</div>

								<div class='form-group'>
									<label for='inputPassword'>Password</label>
									<input type='password' v-model='form.password' id='inputPassword' class='form-control' placeholder='Password'>
								</div>
								<button class='btn btn-lg btn-primary btn-block text-uppercase' type='submit'>Sign in</button>
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
					password: null
				}
			}
		},

		methods: {
			login() {
				AuthClient.login(this.form).then((response) => {
					this.$cookie.set('access_token', response.data.access_token);
					this.$router.push('/');
				});
			}
		}
	}
</script>