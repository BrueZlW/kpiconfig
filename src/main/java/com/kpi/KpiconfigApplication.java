package com.kpi;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Repository;

@SpringBootApplication(scanBasePackages = "com.kpi")
// 定义JPA接口扫描包路径
// @EnableJpaRepositories(basePackages = "com.kpi.dao")
// 定义实体Bean扫描包路径
// @EntityScan(basePackages = "com.kpi.pojo")
// 定义MyBatis扫描
@MapperScan(
        // 指定扫描包
        basePackages = "com.kpi",
        // 指定sqlSessionFactory, 如果sqlSessionTemplate被指定，则作废
        sqlSessionFactoryRef = "sqlSessionFactory",
        // 指定sqlSessionTemplate，将忽略sqlSessionFactory配置
        sqlSessionTemplateRef = "sqlSessionTemplate",
        /**
         * sqlSessionFactory 和 sqlSessionTemplate 可有可无，存在多个时需要指定
         * sqlSessionTemplate优先级更高
        */
        // markerInterface = Class.class, // 限定扫描接口，不常用
        annotationClass = Repository.class  // 限定@Repository（SPring提供的）注解，对应@Mapper（Mabatis提供的，二者一样）
)
public class KpiconfigApplication {

    public static void main(String[] args) {
        SpringApplication.run(KpiconfigApplication.class, args);
    }

}
