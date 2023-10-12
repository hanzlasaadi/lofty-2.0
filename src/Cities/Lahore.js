import React from "react";
import NavBar from "../nav-bar/NavBar";
import "./Lahore.css";
const Lahore=()=>{
    return(
        <>
<NavBar/>
{/* <!-- jumbotron and nav --> */}


	<section class="search-container">
		<div class="container">
			<div class="row">
				<div class="col-lg-3">
					<div class="row my-3">
						<div class="col-sm-12 map-container-btn text-center">
							<input name="map" id="" class="btn btn-outline-secondary map-btn" type="button" value="map"/>
						</div>
					</div>
					<div class="row mt-2 justify-content-between">
						<div class="filter-card">
							<h5>Filter</h5>
							<form action="#">
								<div class="row form-group">
									<div class="col-md-12">
										<label for="mintopay">Check in</label>
										<p>
											<input type="date" name="checkin" id="checkin" class="form-control"/>
										</p>
									</div>
									<div class="col-md-12">
										<label for="maxtopay">Check out</label>
										<p>
											<input type="date" name="checkout" id="checkout" class="form-control"/>
										</p>
									</div>
								</div>
								<div class="row form-group">
									<div class="col-md-12">
										<label for="date-start">Price Range</label>: £
										<span id="price" class="price">1000</span>
										<input type="range" min="23" max="1000" value="1000" class="slider" id="myRange"/>
										{/* </p> */}
									</div>
								</div>
								<div class="row form-group">
									<div class="col-md-12">
										<input type="submit" class="btn btn-primary btn-block" value="Limit"/>
									</div>
								</div>
							</form>
						</div>

					</div>
				</div>



				<div class="col-lg-9  px-4">
					<div class="row mt-3">
						<div class="col-md-6 align-self-center">
							<p class="m-0">
								<b>123</b> out of 1987</p>
						</div>
						<div class="col-md-6">
							<div class="form-inline">
								<label class="m-4" for="exampleFormControlSelect1">Sort by</label>
								<select class="form-control" id="exampleFormControlSelect1">
									<option>Recommended</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</select>
							</div>

						</div>
					</div>

					<div class="row search-card-result">
						<div class="col-md-3">
							<img class="img-fluid" src="http://placeimg.com/640/640/arch" alt="Card image cap"/>
						</div>
						<div class="col-md-5">
							<h5>Choose The Best Plan For You</h5>
							<div class="review">

								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<p>Join over 1 Million of users. Dignissimos asperiores vitae velit veniam</p>
							<p>
								<span class="badge badge-primary">8.5</span> Excellent (2323 reviews)</p>
							<p>
								<i class="fa fa-bath"></i>
								<i class="fa fa-phone"></i>
								<i class="fa fa-wifi"></i>
								<i class="fa fa-tv"></i>
							</p>
						</div>
						<div class="col-md-2 border-left text-center more-offers">
							<p>place.com</p>
							<p>
								<s>£123</s>
							</p>
							<p>Place.com</p>
							<p>£65</p>
							<p class="border-top additional">More Deals from £65</p>
						</div>
						<div class="col-md-2 border-left text-center more-offers">
							<h4>
								<span class="badge badge-success">Top Deal</span>
							</h4>
							<div class="text-warning">
								<p>place.com</p>
								<p>
									<s>£123</s>
								</p>

							</div>
							<div class="text-success">
								<p>Place.com</p>
								<h5>£65</h5>
							</div>

							<div class="btn btn-success">View deal </div>
						</div>
					</div>
					<div class="row search-card-result">
						<div class="col-md-3">
							<img class="img-fluid" src="http://placeimg.com/640/640/arch" alt="Card image cap"/>
						</div>
						<div class="col-md-5">
							<h5>Choose The Best Plan For You</h5>
							<div class="review">

								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<p>Join over 1 Million of users. Dignissimos asperiores vitae velit veniam</p>
							<p>
								<span class="badge badge-primary">8.5</span> Excellent (2323 reviews)</p>
							<p>
								<i class="fa fa-bath"></i>
								<i class="fa fa-phone"></i>
								<i class="fa fa-wifi"></i>
								<i class="fa fa-tv"></i>
							</p>
						</div>
						<div class="col-md-2 border-left text-center more-offers">
							<p>place.com</p>
							<p>
								<s>£123</s>
							</p>
							<p>Place.com</p>
							<p>£65</p>
							<p class="border-top additional">More Deals from £65</p>
						</div>
						<div class="col-md-2 border-left text-center more-offers">
							<h4>
								<span class="badge badge-success">Top Deal</span>
							</h4>
							<div class="text-warning">
								<p>place.com</p>
								<p>
									<s>£123</s>
								</p>

							</div>
							<div class="text-success">
								<p>Place.com</p>
								<h5>£65</h5>
							</div>

							<div class="btn btn-success">View deal </div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</section>

	<section class="py-4">
		<div class="container">
			<div class="row justify-content-center">
				<nav aria-label="Page navigation example">
					<ul class="pagination">
						<li class="page-item">
							<a class="page-link" href="#" aria-label="Previous">
								<span aria-hidden="true">&laquo;</span>
								<span class="sr-only">Previous</span>
							</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">1</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">2</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#">3</a>
						</li>
						<li class="page-item">
							<a class="page-link" href="#" aria-label="Next">
								<span aria-hidden="true">&raquo;</span>
								<span class="sr-only">Next</span>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</section>

	{/* <!-- Subscribe Panel --> */}
	<section id="subscribe-panel">
		<div class="container">
			<div class="row">
				<div class="col-md-8 offset-md-2 text-center">
					<h2>Subscribe</h2>
					<p>To be sent our latest deals.</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-8 offset-md-2">
					<form class="form-inline justify-content-center">
						<div class="form-group mb-2 col-md-6 col-sm-6">
							<label for="email" class="sr-only">Email</label>
							<input type="email" class="form-control" id="email" placeholder="Your Email"/>
						</div>
						<button type="submit" class="btn btn-primary mb-2">Subscribe</button>
					</form>
				</div>
			</div>
		</div>
	</section>

	<footer class="pt-3" id="main-footer" role="contentinfo">
		<div class="container pb-4">
			<div class="row border-bottom my-3 py-3">
				<div class="col-md-6">
					<address class="">
						Hotel Spoof U.S.A, 699 Mount Street, Munger, 48747 Michigan, United States
					</address>
				</div>
				<div class="col-md-6">
					<ul class="nav navbar-nav">
						<li class="dropdown">
							<a class="dropdown-toggle" href="#" data-toggle="dropdown">
								<img src="images/flags/US.png"/> English(US)
								<b class="caret"></b>
							</a>
							<ul class="dropdown-menu">
								<li>
									<a href="#">
										<img src="images/flags/DE.png"/> Deutsch</a>
								</li>
								<li>
									<a href="#">
										<img src="images/flags/GB.png"/> English(UK)</a>
								</li>
								<li>
									<a href="#">
										<img src="images/flags/FR.png"/> Français</a>
								</li>
								<li>
									<a href="#">
										<img src="images/flags/RO.png"/> Română</a>
								</li>
								<li>
									<a href="#">
										<img src="images/flags/IT.png"/> Italiano</a>
								</li>
								<li class="divider"></li>
								<li>
									<a href="#">
										<img src="images/flags/ES.png"/> Español
										<span class="label label-default">soon</span>
									</a>
								</li>
								<li>
									<a href="#">
										<img src="images/flags/BR.png"/> Português
										<span class="label label-default">soon</span>
									</a>
								</li>
								<li>
									<a href="#">
										<img src="images/flags/JP.png"/> 日本語
										<span class="label label-default">soon</span>
									</a>
								</li>
								<li>
									<a href="#">
										<img src="images/flags/TR.png"/> Türkçe
										<span class="label label-default">soon</span>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<h5>A Little About Us</h5>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eos molestias quod sint ipsum possimus temporibus officia
						iste perspiciatis consectetur in fugiat repudiandae cum. Totam cupiditate nostrum ut neque ab?</p>
				</div>
				<div class="col-md-6">
					<h5>More Top Cities & Countries</h5>
					<div class="row">
						<div class="col-md-6">
							<form>
								<div class="form-group">
									<label for="exampleFormControlSelect1">Top Cities</label>
									<select class="form-control" id="exampleFormControlSelect1">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
								</div>
							</form>
						</div>
						<div class="col-md-6">
							<form>
								<div class="form-group">
									<label for="exampleFormControlSelect1">Countries</label>
									<select class="form-control" id="exampleFormControlSelect1">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="row">
						<ul class="nav justify-content-center">
							<li class="nav-item">
								<a class="nav-link active" href="#">
									<i class="fa fa-twitter"></i>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i class="fa fa-facebook"></i>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i class="fa fa-linkedin"></i>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i href="#" class="fa fa-google"></i>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i href="#" class="fa fa-youtube"></i>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i href="#" class="fa fa-instagram"></i>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i href="#" class="fa fa-pinterest"></i>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i href="#" class="fa fa-snapchat-ghost"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md-6">
					<div class="row">
						<div class="container">
							<div class="col-sm-12 p-0">
								<h5 class="border-bottom pb-3">More information</h5>
							</div>
							<div class="row">
								<div class="col-xs-6 col-sm-4 col-md-4">
									<ul class="nav flex-column footer-nav">
										<li class="nav-item">
											<a href="#">Terms and Conditions</a>
										</li>
										<li class="nav-item">
											<a href="#">Legal Information</a>
										</li>
										<li class="nav-item">
											<a href="#">Privacy Policy</a>
										</li>
										<li class="nav-item">
											<a href="#">Site Map</a>
										</li>
										<li class="nav-item">
											<a href="#">Cookie policy</a>
										</li>
									</ul>
								</div>
								<div class="col-xs-6 col-sm-4 col-md-3">
									<ul class="nav flex-column footer-nav">
										<li class="nav-item">
											<a href="#">Company</a>
										</li>
										<li class="nav-item">
											<a href="#">Careers</a>
										</li>
										<li class="nav-item">
											<a href="#">Press</a>
										</li>
										<li class="nav-item">
											<a href="#">Investors</a>
										</li>
										<li class="nav-item">
											<a href="#">Dubai</a>
										</li>
									</ul>
								</div>
								<div class="col-sm-4 col-md-3">
									<ul class="nav flex-column footer-nav">
										<li class="nav-item">
											<a href="#">Android App</a>
										</li>
										<li class="nav-item">
											<a href="#">IOS APP</a>
										</li>
										<li class="nav-item">
											<a href="#">Window Store</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="copyright border-top pb-4">
			<div class="">
				<h3 class="text-center">Spoof Hotels</h3>
				<p class="text-center">
					<small class="block">Copyright 2018 Spoof Hotels&copy; | All rights reserved. </small>
					<small class="block">Designed by
						<a href="#" target="_blank">UndreamtMayhem</a> | Demo Images:
						<a href="#" target="_blank">UndreamtMayhem</a>
					</small>

				</p>
				<ul class="nav justify-content-center">
					<li class="nav-item">
						<a class="nav-link active" href="#">
							<i class="fa fa-twitter"></i>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							<i class="fa fa-facebook"></i>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							<i class="fa fa-linkedin"></i>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							<i href="#" class="fa fa-google"></i>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							<i href="#" class="fa fa-youtube"></i>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							<i href="#" class="fa fa-instagram"></i>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							<i href="#" class="fa fa-pinterest"></i>
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#">
							<i href="#" class="fa fa-snapchat-ghost"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
       
        </>
    )
}
export default Lahore;