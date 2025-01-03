"use client"
import React, { useEffect, useState } from "react";
import { fetchGraphQL } from "@/lib/graphqlClient";

const COUNTRIES_QUERY = `
    query CountriesQuery($first: Int!) {
        countriesCollection(first: $first) {
        edges {
            node {
            id
            continent
            countries
            }
        }
        }
    }
`;

export default function DashboardPage() {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        async function loadCountries() {
        const response = await fetchGraphQL(COUNTRIES_QUERY, { first: 3 });
        console.log(response)
        if (response.data) {
            setData(response.data.countriesCollection.edges);
        }
        }
        loadCountries();
    }, []);

    return (
        <div>
        <h1>Dashboard</h1>
        {data.map(({ node }: any) => (
            <div key={node.id}>
            <p>ID: {node.id}</p>
            <p>Continent: {node.continent}</p>
            <p>Countries: {node.countries}</p>
            </div>
        ))}
        </div>
    );
}