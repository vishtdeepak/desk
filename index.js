{% extends 'base.html' %} {% load humanize %} {% block title %} | Welcome {% endblock %} {% block content %}

<!-- Showcase -->
<section id="showcase">
    <div class="container text-center">
        <div class="home-search p-5">
            <div class="overlay p-5">
                <h1 class="display-4 mb-4">
                    Property Searching Just Got So Easy
                </h1>
                <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quas, asperiores eveniet vel nostrum magnam voluptatum tempore! Consectetur, id commodi!</p>
                <div class="search">
                    <form action="{% url 'search' %}">
                        <!-- Form Row 1 -->
                        <div class="form-row">
                            <div class="col-md-4 mb-3">
                                <label class="sr-only">Keywords</label>
                                <input type="text" name="keywords" class="form-control" placeholder="Keyword (Pool, Garage, etc)" value="{{ values.keywords }}">
                            </div>

                            <div class="col-md-4 mb-3">
                                <label class="sr-only">City</label>
                                <input type="text" name="city" class="form-control" placeholder="City" value="{{ values.city }}">
                            </div>

                            <div class="col-md-4 mb-3">
                                <label class="sr-only">State</label>
                                <select name="state" class="form-control">
                                  <option selected="true" disabled="disabled">State (All)</option>
                                  {% for key, value in state_choices.items %}
                                    <option value="{{key}}"
                                    {% if key == values.state %}
                                      selected
                                    {% endif %}                              
                                    >{{ value }}</option>
                                  {% endfor %}
                                </select>
                            </div>
                        </div>
                        <!-- Form Row 2 -->
                        <div class="form-row">
                            <div class="col-md-6 mb-3">
                                <label class="sr-only">Bedrooms</label>
                                <select name="bedrooms" class="form-control">
                                  <option selected="true" disabled="disabled">Bedrooms (Any)</option>
                                  {% for key, value in bedroom_choices.items %}
                                      <option value="{{key}}"
                                      {% if key == values.bedrooms %}
                                        selected
                                      {% endif %}                                  
                                      >{{ value }}</option>
                                  {% endfor %}
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <select name="price" class="form-control">
                                  <option selected="true" disabled="disabled">Max Price (All)</option>
                                  {% for key, value in price_choices.items %}
                                      <option value="{{key}}"
                                      {% if key == values.price %}
                                        selected
                                      {% endif %}
                                      >{{ value }}</option>
                                  {% endfor %}
                                </select>
                            </div>
                        </div>

                        <button class="btn btn-secondary btn-block mt-4" type="submit">Submit form</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Alerts -->
{% include 'partials/_alerts.html' %}

<!-- Listings -->
<section id="listings" class="py-5">
    <div class="container">
        <h3 class="text-center mb-3">Latest Listings</h3>
        <div class="row">
            

            {% if listings %} {% for listing in listings %}
            <!-- Listing 1 -->
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card listing-preview">
                    <img class="card-img-top" src="{{ listing.photo_main.url }}" alt="">
                    <div class="card-img-overlay">
                        <h2>
                            <span class="badge badge-secondary text-white">${{ listing.price | intcomma }}</span>
                        </h2>
                    </div>
                    <div class="card-body">
                        <div class="listing-heading text-center">
                            <h4 class="text-primary">{{ listing.title }}</h4>
                            <p>
                                <i class="fas fa-map-marker text-secondary"></i> {{ listing.city }} {{ listing.state }} {{ listing.zipcode}}</p>
                        </div>
                        <hr>
                        <div class="row py-2 text-secondary">
                            <div class="col-6">
                                <i class="fas fa-th-large"></i> Sqft: {{ listing.sqft }}</div>
                            <div class="col-6">
                                <i class="fas fa-car"></i> Garage: {{ listing.garage }}</div>
                        </div>
                        <div class="row py-2 text-secondary">
                            <div class="col-6">
                                <i class="fas fa-bed"></i> Bedrooms: {{ listing.bedroom }}</div>
                            <div class="col-6">
                                <i class="fas fa-bath"></i> Bathrooms: {{ listing.bathroom }}</div>
                        </div>
                        <hr>
                        <div class="row py-2 text-secondary">
                            <div class="col-6">
                                <i class="fas fa-user"></i> {{ listing.realtor}}</div>
                        </div>
                        <div class="row text-secondary pb-2">
                            <div class="col-6">
                                <i class="fas fa-clock"></i> {{ listing.list_date | timesince }}</div>
                        </div>
                        <hr>
                        <a href="{% url 'listing' listing.id %}" class="btn btn-primary btn-block">More Info</a>
                    </div>
                </div>
            </div>
            {% endfor %} {% else %}
            <div class="col-md-12">
                <p>No Listings Available</p>
            </div>
            {% endif%}

        </div>
    </div>
</section>

<section id="services" class="py-5 bg-secondary text-white">
    <div class="container">
        <div class="row text-center">
            <div class="col-md-4">
                <i class="fas fa-comment fa-4x mr-4"></i>
                <hr>
                <h3>Consulting Services</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis nam! Repudiandae, provident iste consequatur hic dignissimos ratione ea quae.</p>
            </div>
            <div class="col-md-4">
                <i class="fas fa-home fa-4x mr-4"></i>
                <hr>
                <h3>Propery Management</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis nam! Repudiandae, provident iste consequatur hic dignissimos ratione ea quae.</p>
            </div>
            <div class="col-md-4">
                <i class="fas fa-suitcase fa-4x mr-4"></i>
                <hr>
                <h3>Renting & Selling</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, debitis nam! Repudiandae, provident iste consequatur hic dignissimos ratione ea quae.</p>
            </div>
        </div>
    </div>
</section>

{% endblock %}