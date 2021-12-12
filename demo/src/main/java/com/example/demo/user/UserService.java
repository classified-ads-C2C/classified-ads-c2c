package com.example.demo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(User user) {
       return userRepository.save(user);
    }

    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    public User getUser(String id) {
        Long userId =Long.parseLong(id);
        return userRepository.findById(userId).orElse(null);
    }

    public void updateUser(String id, User data) {
        Long updateUser = Long.parseLong(id);
        User user = userRepository.findById(updateUser).orElse(null);

        if(user != null){
            user.setName(data.getName());
            user.setPassword(data.getPassword());
            user.setPhone(data.getPhone());
            userRepository.save(user);
        }
    }

    public void deleteUser(String id) {
        Long deleteId = Long.parseLong(id);
        userRepository.deleteById(deleteId);
    }

}
