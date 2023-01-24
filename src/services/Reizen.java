package services;

import java.util.Date;

import javax.annotation.Nonnull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties; // hidden-source-line
@JsonIgnoreProperties(ignoreUnknown = true) // hidden-source-line
// tag::snippet[]
public class Reizen {

    @Nonnull
    private String firstName;

    @Nonnull
    private String lastName;

    @Nonnull
    private String email;

    @Nonnull
    private Date birthday;

    @Nonnull
    private Integer id;

    @Nonnull
    private boolean subscriber;

    @Nonnull
    private String membership;

    @Nonnull
    private String pictureUrl;

    @Nonnull
    private String profession;

    @Nonnull
    private Address address;

    private Integer managerId;

    @Nonnull
    private boolean manager;

    @Nonnull
    private String status;
