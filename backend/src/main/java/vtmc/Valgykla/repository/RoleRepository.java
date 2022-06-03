package vtmc.Valgykla.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vtmc.Valgykla.model.ERole;
import vtmc.Valgykla.model.Role;
@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {
Optional<Role> findByName(ERole name);
}
