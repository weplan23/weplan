// Main edit page. User can select one of their itineraries to edit from here.


function EditPage() {
  const itineraryList = [
    {
      title: "Nature in Sydney",
      location: "Sydney",
      nights: 4,
      stops: [
        // Add stops here.
      ],
      profileName: "John"
    }
    // Add more sample itineraries here.
  ]

  // TODO: hard code at least one itinerary.
  return (
    <>
      Hello, world! This is the edit page. The user can select one of their itineraries to edit from here.
      {/* Map itineraries... */}
      {
        itineraryList.map((i, index) => {
          return (
            <div>
              <div style={{
                // Add styles for itinarary title here.
              }}
              >
                {/* Itinerary title */}
              </div>

              <div style={{
                // Add styles for itinarary details (location, duration, etc.) here.
              }}
              >
                {/* Itinerary details */}
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default EditPage;

