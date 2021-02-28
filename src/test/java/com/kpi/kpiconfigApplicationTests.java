package com.kpi;

import com.kpi.dao.Linemapper;
import org.apache.ibatis.type.Alias;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class kpiconfigApplicationTests {






    @Autowired
    private Linemapper linemapper = null;

    @Test
    void contextLoads() {
    }


    @Test
    void test1() {
        System.out.println(linemapper.getELine("equipment_line", 4));
    }

    @Test
    void test2() {
        System.out.println(linemapper.getperonpa("Person_p_a", 4));
    }
}
