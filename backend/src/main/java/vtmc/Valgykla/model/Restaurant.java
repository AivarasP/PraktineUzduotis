package vtmc.Valgykla.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;


import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Restaurant {

	@Id
	@GeneratedValue
	private Long id;
	private String name;
	
	private Integer code;
	@NotNull
	private String address;

	private Restaurant(String name, Integer code, String address) {
		this.name = name;
		this.code = code;
		this.address = address;
	}
	
}
