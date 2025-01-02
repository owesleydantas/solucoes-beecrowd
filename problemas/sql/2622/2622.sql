SELECT
    customers.name as name
FROM
    customers,
    JOIN legal_person on customers.id = legal_person.id_customres;