<template>
  <nav class="uk-navbar-container uk-navbar-transparent uk-dark">
		<div class="uk-container">
			<div uk-navbar>
				<div class="uk-navbar-left">
					<a class="uk-navbar-item uk-logo">
						<img src="logo.svg" alt="Logo" />
					</a>
				</div>
				<div class="uk-navbar-center">
					<ul class="uk-navbar-nav uk-visible@m">
						<li class="uk-active"><NuxtLink to="/">Home</NuxtLink></li>
						<li>
							<NuxtLink to="/services">Services</NuxtLink>
							<div class="uk-navbar-dropdown">
								<ul class="uk-nav uk-navbar-dropdown-nav">
									<li><NuxtLink to="/">Ocean freight forwarding</NuxtLink></li>
									<li><NuxtLink to="/">Customs house brokerage</NuxtLink></li>
									<li><NuxtLink to="/">Transportation & Distribution</NuxtLink></li>
								</ul>
							</div>
						</li>
						<li><NuxtLink to="/news">News</NuxtLink></li>
						<li><NuxtLink to="/about">About Me</NuxtLink></li>
						<li><NuxtLink to="/contact">Contact</NuxtLink></li>
					</ul>
				</div>
				<div class="uk-navbar-right">
					<ul class="uk-navbar-nav uk-visible@m">
						<li>
							<div class="uk-navbar-item">
								<NuxtLink to="/" class="uk-button uk-button-medium uk-button-secondary">Request a quote</NuxtLink>
							</div>
						</li>
					</ul>
					<a href="#offcanvas-menu" class="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon uk-toggle></a>
				</div>
			</div>
		</div>
	</nav>
	

</template>

<style scoped>

</style>