package com.todolist.todolist;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class Controller {

    JsonNode list;

    @GetMapping("/get")
    @CrossOrigin
    public Map<String, Object> getlist(@RequestBody JsonNode item) {
        Map<String, Object> map = new HashMap<>();
        map.put("test",item.get("id"));
        return map;
    }

    @PostMapping("/post")
    @CrossOrigin
    public JsonNode process(@RequestBody JsonNode payload)
            throws Exception {

        this.list = payload;

        return this.list;
    }
}