SELECT ANIMAL_TYPE, COUNT(ANIMAL_TYPE) count FROM ANIMAL_INS GROUP BY ANIMAL_TYPE ORDER BY ANIMAL_TYPE
-- ANIMAL_TYPE별로 그룹화를 하여 ANIMAL_TYPE별 개수를 구한 후 ANIMAL_TYPE으로 정렬
