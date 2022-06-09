package vtmc.Valgykla.controller;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import exception.ResourceNotFoundException;
import lombok.extern.slf4j.Slf4j;
import vtmc.Valgykla.model.Menu;
import vtmc.Valgykla.repository.MenuRepository;
import vtmc.Valgykla.repository.RestaurantRepository;

@Slf4j
@RestController
public class MenuController {

	@Autowired
	private MenuRepository menuRepository;
	
	@Autowired
	private RestaurantRepository restaurantRepository;
	
	@GetMapping("/api/restaurants/{restaurantId}/menu")
	public Page<Menu> getAllMenuByRestaurantId(@PathVariable(value = "restaurantId") Long restaurantId,
			Pageable pageable){
		return menuRepository.findByRestaurantId(restaurantId, pageable);
	}
	@PostMapping("/api/restaurants/{restaurantId}/menu")
	public Menu createMenu(@PathVariable (value = "restaurantId")Long restaurantId,
			 @RequestBody Menu menu) {
		return restaurantRepository.findById(restaurantId).map(r -> {
			menu.setRestaurant(r);
			log.info("Menu: "+menu);
			return menuRepository.save(menu);
		}).orElseThrow(()-> new ResourceNotFoundException("RestaurantId " + restaurantId +" not found"));
	}
	@PutMapping("/api/restaurants/{restaurantId}/menu/{menuId}")
    public Menu updateMenu(@PathVariable (value = "restaurantId") Long restaurantId,
                                 @PathVariable (value = "menuId") Long menuId,
                                 @Valid @RequestBody Menu menuRequest) {
        if(!restaurantRepository.existsById(restaurantId)) {
            throw new ResourceNotFoundException("RestaurantId " + restaurantId + " not found");
        }

        return menuRepository.findById(menuId).map(menu -> {
            menu.setDishes(menuRequest.getDishes());
            menu.setDrinks(menuRequest.getDrinks());
            return menuRepository.save(menu);
        }).orElseThrow(() -> new ResourceNotFoundException("MenuId " + menuId + "not found"));
    }

    @DeleteMapping("/api/restaurants/{restaurantId}/menu/{menuId}")
    public ResponseEntity<?> deleteMenu(@PathVariable (value = "restaurantId") Long restaurantId,
                              @PathVariable (value = "menuId") Long menuId) {
        return menuRepository.findByIdAndRestaurantId(menuId, restaurantId).map(menu -> {
        	menuRepository.delete(menu);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("Menu not found with id " + menuId + " and RestaurantId " + restaurantId));
    }
}

