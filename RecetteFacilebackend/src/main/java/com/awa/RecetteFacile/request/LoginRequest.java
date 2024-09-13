package com.awa.RecetteFacile.request;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class LoginRequest {
    private String email;
    private String password;
}
