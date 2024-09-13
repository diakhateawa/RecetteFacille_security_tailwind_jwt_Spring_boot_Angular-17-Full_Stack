package com.awa.RecetteFacile.entite;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

@Table(name = "app_recipe") // ou "users"
@ToString
@Data
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "recipe_seq")
    @SequenceGenerator(name = "recipe_seq", sequenceName = "recipe_seq", allocationSize = 1)
    private Long id;

    private String title;

    private String image;

    private String description;

    private boolean vagetarian;

    private LocalDateTime createdAt;

    private List<Long> likes = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "user_id") // Ajoutez cette ligne si elle n'est pas présente
    private User user;
}
