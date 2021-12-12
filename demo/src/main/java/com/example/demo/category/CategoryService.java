package com.example.demo.category;

import com.example.demo.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Category createUser(Category category) {
        return categoryRepository.save(category);
    }

    public List<Category> getAllCategory() {
        return categoryRepository.findAll();
    }

    public Category getCategory(String id) {
        Long categoryId =Long.parseLong(id);
        return categoryRepository.findById(categoryId).orElse(null);
    }

    public void updateCategory(String id, Category data) {
        Long updateCategory = Long.parseLong(id);
        Category category = categoryRepository.findById(updateCategory).orElse(null);

        if(category != null){
            category.setCategoryName(data.getCategoryName());
            categoryRepository.save(category);
        }
    }

    public void deleteCategory(String id) {
        Long deleteId = Long.parseLong(id);
        categoryRepository.deleteById(deleteId);
    }
}
