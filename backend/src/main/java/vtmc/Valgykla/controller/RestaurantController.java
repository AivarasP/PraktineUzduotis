package vtmc.Valgykla.controller;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vtmc.Valgykla.model.Restaurant;
import vtmc.Valgykla.repository.RestaurantRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/restaurants")
public class RestaurantController {

	@Autowired
	public RestaurantRepository RestaurantRepo;

	@GetMapping
	public List<Restaurant> getIncomes() {
		return RestaurantRepo.findAll();

	}

	@GetMapping("/{id}")
	public Restaurant getRestaurants(@PathVariable Long id) {
		return RestaurantRepo.findById(id).get();
	}

	@PostMapping
	public Restaurant postRestaurants(@RequestBody Restaurant restaurant) {
		return RestaurantRepo.save(restaurant);
	}

	@DeleteMapping("/{id}")
	public void deleteRestaurants(@PathVariable Long id) {
		RestaurantRepo.deleteById(id);
	}
	
//	ResponseEntity
	@PutMapping("/{id}")
	public ResponseEntity<Restaurant> updateRestaurants(@PathVariable Long id, @Valid @RequestBody Restaurant restaurantDetails) {
		Restaurant restaurant = RestaurantRepo.findById(id).orElseThrow() ;
		
		restaurant.setName(restaurantDetails.getName());
		restaurant.setCode(restaurantDetails.getCode());
		restaurant.setAddress(restaurantDetails.getAddress());
		final Restaurant updatedRestaurant = RestaurantRepo.save(restaurant);
        return ResponseEntity.ok(updatedRestaurant);
	}
}
