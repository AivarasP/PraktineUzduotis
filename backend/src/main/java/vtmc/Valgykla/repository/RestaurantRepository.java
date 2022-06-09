package vtmc.Valgykla.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import vtmc.Valgykla.model.Restaurant;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
	

}
