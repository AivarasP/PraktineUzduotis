package vtmc.Valgykla;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import vtmc.Valgykla.model.ERole;
import vtmc.Valgykla.model.Role;
import vtmc.Valgykla.repository.RoleRepository;

@Component
public class InitData implements CommandLineRunner {

	@Autowired
	RoleRepository roleRepo;
	
	@Override
	public void run(String... args) throws Exception {
		
		if(roleRepo.findByName(ERole.ROLE_USER).isEmpty()) {
		roleRepo.save(new Role(ERole.ROLE_USER));
		}
	}

}
