const apiKey = 'lCUEcSOkPflc5OABzdpf52GCotqd7-D_Vn8pU0bR6nugIThE32KTGX8pybeIlJcFLNeCvfI--n5NA46im1DXidAMIdfWHckaAv8CQSG9z_9B-lTAQGAdQIKb92naWnYx';

const Yelp = {
	search(term,location,sortBy){
	const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
	console.log(url);
	return fetch(url,{
			headers:{Authorization:`Bearer ${apiKey}`
					}
			}).then(response => {
				
				return response.json();
			 // throw new Error('Request failed! oops');
			// console.log(url);
			
		}).then(jsonResponse => {
			if(jsonResponse.businesses){
				return jsonResponse.businesses.map(business => (
									
					{
						id: business.id,							
						imageSrc: business.image_url,
						name: business.name,
						address: business.location.address1,
						city: business.location.city,
						state: business.location.state,
						zipCode: business.location.zip_code,
						category: business.categories,
						rating: business.rating,
						reviewCount: business.review_count
					}
				));
			}
		});
	}
};

export default Yelp;