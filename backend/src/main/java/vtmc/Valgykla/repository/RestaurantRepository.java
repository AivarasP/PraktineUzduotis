package vtmc.Valgykla.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import vtmc.Valgykla.model.Restaurant;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
	

}
