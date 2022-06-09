package vtmc.Valgykla.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "menu")
@Data
@NoArgsConstructor
public class Menu {
@Id
@GeneratedValue( strategy = GenerationType.IDENTITY)
private Long id;

@NotNull
@Lob
private String dishes;
@NotNull
@Lob
private String drinks;
@ManyToOne(fetch = FetchType.LAZY,optional = false)
@JoinColumn(name = "restaurant_id", nullable = false)
@OnDelete(action = OnDeleteAction.CASCADE)
@JsonIgnore
private Restaurant restaurant;
}
