<script>
    function initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        var input = document.getElementById('cowork-search');

        autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(input),
            {types: ['geocode']});

        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
        autocomplete.setComponentRestrictions({'country': ['in', 'uk', 'ca']});
        autocomplete.addListener('place_changed', fillInAddress);
    }
    function fillInAddress() {
        // Get the place details from the autocomplete object.
        var place = autocomplete.getPlace();
        latitude = place.geometry.location.lat();
        longitude = place.geometry.location.lng();
    }


    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
          });
    }

</script>
<script src="https://maps.googleapis.com/maps/api/js?key=<API_KEY>&libraries=places&callback=initAutocomplete"
        async defer></script>
