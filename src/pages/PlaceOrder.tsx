import React, { useEffect, useState } from 'react';
import { useApi, createItem } from '../hooks/useApi';
import { Restaurant, Customer } from '../types';
// Removed MenuItem import since we are hardcoding menu items

const PlaceOrder = () => {
  // Fetch data using custom hooks
  const {
    data: restaurants,
    loading: loadingRestaurants,
    error: errorRestaurants,
    fetchData: fetchRestaurants,
  } = useApi<Restaurant[]>('/restaurants');

  const {
    data: customers,
    loading: loadingCustomers,
    error: errorCustomers,
    fetchData: fetchCustomers,
  } = useApi<Customer[]>('/customers');

  const hardcodedMenuItems = [
[
 {
   "item_id": "ITEM0001",
   "restaurant_id": "REST001",
   "name": "Defense Plate",
   "category": "Main Course",
   "price": 18.75,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0002",
   "restaurant_id": "REST001",
   "name": "Gas Plate",
   "category": "Dessert",
   "price": 9.16,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0003",
   "restaurant_id": "REST001",
   "name": "Whose Plate",
   "category": "Dessert",
   "price": 16.43,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0004",
   "restaurant_id": "REST001",
   "name": "Involve Plate",
   "category": "Main Course",
   "price": 25.28,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0005",
   "restaurant_id": "REST001",
   "name": "Near Dish",
   "category": "Appetizer",
   "price": 14.33,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0006",
   "restaurant_id": "REST001",
   "name": "Whether Dish",
   "category": "Dessert",
   "price": 15.9,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0007",
   "restaurant_id": "REST001",
   "name": "Member Delight",
   "category": "Side Dish",
   "price": 26.86,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0008",
   "restaurant_id": "REST001",
   "name": "South Dish",
   "category": "Dessert",
   "price": 12.92,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0009",
   "restaurant_id": "REST001",
   "name": "Film Delight",
   "category": "Beverage",
   "price": 11.17,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0010",
   "restaurant_id": "REST001",
   "name": "Culture Delight",
   "category": "Side Dish",
   "price": 26.93,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0011",
   "restaurant_id": "REST002",
   "name": "Be Dish",
   "category": "Appetizer",
   "price": 10.17,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0012",
   "restaurant_id": "REST002",
   "name": "Response Delight",
   "category": "Beverage",
   "price": 12.83,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0013",
   "restaurant_id": "REST002",
   "name": "Data Plate",
   "category": "Dessert",
   "price": 23.19,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0014",
   "restaurant_id": "REST002",
   "name": "Thing Dish",
   "category": "Beverage",
   "price": 28.45,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0015",
   "restaurant_id": "REST002",
   "name": "Family Dish",
   "category": "Dessert",
   "price": 13.41,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0016",
   "restaurant_id": "REST002",
   "name": "Hotel Plate",
   "category": "Appetizer",
   "price": 19.84,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0017",
   "restaurant_id": "REST002",
   "name": "Local Dish",
   "category": "Dessert",
   "price": 25.98,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0018",
   "restaurant_id": "REST002",
   "name": "Prove Special",
   "category": "Main Course",
   "price": 17.41,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0019",
   "restaurant_id": "REST002",
   "name": "Fight Dish",
   "category": "Beverage",
   "price": 24.25,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0020",
   "restaurant_id": "REST002",
   "name": "Beautiful Special",
   "category": "Beverage",
   "price": 8.31,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0021",
   "restaurant_id": "REST003",
   "name": "Property Delight",
   "category": "Appetizer",
   "price": 16.14,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0022",
   "restaurant_id": "REST003",
   "name": "Exactly Special",
   "category": "Main Course",
   "price": 8.67,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0023",
   "restaurant_id": "REST003",
   "name": "Edge Delight",
   "category": "Side Dish",
   "price": 8.58,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0024",
   "restaurant_id": "REST003",
   "name": "Very Dish",
   "category": "Appetizer",
   "price": 24.95,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0025",
   "restaurant_id": "REST003",
   "name": "Position Special",
   "category": "Appetizer",
   "price": 22.93,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0026",
   "restaurant_id": "REST003",
   "name": "Top Plate",
   "category": "Beverage",
   "price": 9.56,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0027",
   "restaurant_id": "REST003",
   "name": "Effect Special",
   "category": "Side Dish",
   "price": 14.82,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0028",
   "restaurant_id": "REST003",
   "name": "Determine Dish",
   "category": "Appetizer",
   "price": 18.56,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0029",
   "restaurant_id": "REST003",
   "name": "Note Delight",
   "category": "Appetizer",
   "price": 28.42,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0030",
   "restaurant_id": "REST003",
   "name": "Team Delight",
   "category": "Beverage",
   "price": 13.46,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0031",
   "restaurant_id": "REST004",
   "name": "Enough Special",
   "category": "Beverage",
   "price": 29.42,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0032",
   "restaurant_id": "REST004",
   "name": "Production Plate",
   "category": "Main Course",
   "price": 19.74,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0033",
   "restaurant_id": "REST004",
   "name": "Them Plate",
   "category": "Side Dish",
   "price": 23.96,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0034",
   "restaurant_id": "REST004",
   "name": "Audience Dish",
   "category": "Beverage",
   "price": 13.5,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0035",
   "restaurant_id": "REST004",
   "name": "Study Dish",
   "category": "Appetizer",
   "price": 8.76,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0036",
   "restaurant_id": "REST004",
   "name": "College Special",
   "category": "Beverage",
   "price": 21.66,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0037",
   "restaurant_id": "REST004",
   "name": "Ball Delight",
   "category": "Appetizer",
   "price": 24.47,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0038",
   "restaurant_id": "REST004",
   "name": "Model Dish",
   "category": "Appetizer",
   "price": 16.94,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0039",
   "restaurant_id": "REST004",
   "name": "Add Delight",
   "category": "Main Course",
   "price": 19.52,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0040",
   "restaurant_id": "REST004",
   "name": "Game Delight",
   "category": "Side Dish",
   "price": 12.32,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0041",
   "restaurant_id": "REST005",
   "name": "Thank Dish",
   "category": "Main Course",
   "price": 10.37,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0042",
   "restaurant_id": "REST005",
   "name": "Interesting Special",
   "category": "Appetizer",
   "price": 28.47,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0043",
   "restaurant_id": "REST005",
   "name": "Window Plate",
   "category": "Beverage",
   "price": 7.62,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0044",
   "restaurant_id": "REST005",
   "name": "Hold Dish",
   "category": "Appetizer",
   "price": 23.34,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0045",
   "restaurant_id": "REST005",
   "name": "Return Special",
   "category": "Beverage",
   "price": 21.38,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0046",
   "restaurant_id": "REST005",
   "name": "Account Dish",
   "category": "Side Dish",
   "price": 22.57,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0047",
   "restaurant_id": "REST005",
   "name": "Method Plate",
   "category": "Beverage",
   "price": 19.9,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0048",
   "restaurant_id": "REST005",
   "name": "Owner Special",
   "category": "Dessert",
   "price": 28.97,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0049",
   "restaurant_id": "REST005",
   "name": "Scene Special",
   "category": "Side Dish",
   "price": 11.75,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0050",
   "restaurant_id": "REST005",
   "name": "Security Delight",
   "category": "Beverage",
   "price": 26.08,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0051",
   "restaurant_id": "REST006",
   "name": "Road Dish",
   "category": "Appetizer",
   "price": 17.6,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0052",
   "restaurant_id": "REST006",
   "name": "Couple Dish",
   "category": "Dessert",
   "price": 27.04,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0053",
   "restaurant_id": "REST006",
   "name": "Measure Plate",
   "category": "Side Dish",
   "price": 15.63,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0054",
   "restaurant_id": "REST006",
   "name": "College Dish",
   "category": "Appetizer",
   "price": 10.75,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0055",
   "restaurant_id": "REST006",
   "name": "Condition Dish",
   "category": "Beverage",
   "price": 24.87,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0056",
   "restaurant_id": "REST006",
   "name": "Site Dish",
   "category": "Main Course",
   "price": 13.44,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0057",
   "restaurant_id": "REST006",
   "name": "Up Delight",
   "category": "Main Course",
   "price": 19.24,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0058",
   "restaurant_id": "REST006",
   "name": "Instead Plate",
   "category": "Appetizer",
   "price": 11.3,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0059",
   "restaurant_id": "REST006",
   "name": "Parent Delight",
   "category": "Main Course",
   "price": 17.19,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0060",
   "restaurant_id": "REST006",
   "name": "Accept Dish",
   "category": "Appetizer",
   "price": 10.51,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0061",
   "restaurant_id": "REST007",
   "name": "Occur Dish",
   "category": "Appetizer",
   "price": 10.04,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0062",
   "restaurant_id": "REST007",
   "name": "Eye Delight",
   "category": "Dessert",
   "price": 7.52,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0063",
   "restaurant_id": "REST007",
   "name": "Far Dish",
   "category": "Main Course",
   "price": 7.58,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0064",
   "restaurant_id": "REST007",
   "name": "Whom Dish",
   "category": "Main Course",
   "price": 13.94,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0065",
   "restaurant_id": "REST007",
   "name": "Year Delight",
   "category": "Main Course",
   "price": 8.85,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0066",
   "restaurant_id": "REST007",
   "name": "In Delight",
   "category": "Side Dish",
   "price": 26.12,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0067",
   "restaurant_id": "REST007",
   "name": "Technology Delight",
   "category": "Appetizer",
   "price": 8.53,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0068",
   "restaurant_id": "REST007",
   "name": "Foot Delight",
   "category": "Main Course",
   "price": 11.99,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0069",
   "restaurant_id": "REST007",
   "name": "Mean Plate",
   "category": "Dessert",
   "price": 10.1,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0070",
   "restaurant_id": "REST007",
   "name": "Religious Special",
   "category": "Beverage",
   "price": 17.02,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0071",
   "restaurant_id": "REST008",
   "name": "Value Dish",
   "category": "Side Dish",
   "price": 13.76,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0072",
   "restaurant_id": "REST008",
   "name": "Exactly Dish",
   "category": "Side Dish",
   "price": 24.67,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0073",
   "restaurant_id": "REST008",
   "name": "Avoid Dish",
   "category": "Appetizer",
   "price": 27.53,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0074",
   "restaurant_id": "REST008",
   "name": "Note Plate",
   "category": "Dessert",
   "price": 16.38,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0075",
   "restaurant_id": "REST008",
   "name": "Peace Dish",
   "category": "Main Course",
   "price": 6.25,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0076",
   "restaurant_id": "REST008",
   "name": "Lawyer Special",
   "category": "Appetizer",
   "price": 20.9,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0077",
   "restaurant_id": "REST008",
   "name": "Window Plate",
   "category": "Side Dish",
   "price": 8.32,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0078",
   "restaurant_id": "REST008",
   "name": "Life Special",
   "category": "Beverage",
   "price": 10.72,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0079",
   "restaurant_id": "REST008",
   "name": "Then Special",
   "category": "Dessert",
   "price": 12.66,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0080",
   "restaurant_id": "REST008",
   "name": "Old Plate",
   "category": "Side Dish",
   "price": 27.75,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0081",
   "restaurant_id": "REST009",
   "name": "Attorney Delight",
   "category": "Dessert",
   "price": 11.96,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0082",
   "restaurant_id": "REST009",
   "name": "Up Plate",
   "category": "Beverage",
   "price": 10.4,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0083",
   "restaurant_id": "REST009",
   "name": "Check Delight",
   "category": "Side Dish",
   "price": 20.93,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0084",
   "restaurant_id": "REST009",
   "name": "Cultural Plate",
   "category": "Appetizer",
   "price": 24.22,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0085",
   "restaurant_id": "REST009",
   "name": "Region Delight",
   "category": "Beverage",
   "price": 9.58,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0086",
   "restaurant_id": "REST009",
   "name": "Some Special",
   "category": "Side Dish",
   "price": 15.14,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0087",
   "restaurant_id": "REST009",
   "name": "Scene Special",
   "category": "Beverage",
   "price": 14.53,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0088",
   "restaurant_id": "REST009",
   "name": "Pay Special",
   "category": "Appetizer",
   "price": 26.02,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0089",
   "restaurant_id": "REST009",
   "name": "Question Delight",
   "category": "Appetizer",
   "price": 22.14,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0090",
   "restaurant_id": "REST009",
   "name": "Born Plate",
   "category": "Beverage",
   "price": 13.03,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0091",
   "restaurant_id": "REST010",
   "name": "Operation Dish",
   "category": "Main Course",
   "price": 10.58,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0092",
   "restaurant_id": "REST010",
   "name": "Early Dish",
   "category": "Beverage",
   "price": 6.63,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0093",
   "restaurant_id": "REST010",
   "name": "Travel Delight",
   "category": "Side Dish",
   "price": 10.57,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0094",
   "restaurant_id": "REST010",
   "name": "Type Special",
   "category": "Dessert",
   "price": 20.06,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0095",
   "restaurant_id": "REST010",
   "name": "Likely Special",
   "category": "Appetizer",
   "price": 23.74,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0096",
   "restaurant_id": "REST010",
   "name": "Reduce Plate",
   "category": "Main Course",
   "price": 16.15,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0097",
   "restaurant_id": "REST010",
   "name": "Manage Special",
   "category": "Side Dish",
   "price": 13.87,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0098",
   "restaurant_id": "REST010",
   "name": "Just Dish",
   "category": "Main Course",
   "price": 13.96,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0099",
   "restaurant_id": "REST010",
   "name": "Financial Plate",
   "category": "Main Course",
   "price": 27.44,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0100",
   "restaurant_id": "REST010",
   "name": "To Dish",
   "category": "Beverage",
   "price": 28.44,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0101",
   "restaurant_id": "REST011",
   "name": "Start Special",
   "category": "Beverage",
   "price": 23.02,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0102",
   "restaurant_id": "REST011",
   "name": "Choose Dish",
   "category": "Main Course",
   "price": 22.26,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0103",
   "restaurant_id": "REST011",
   "name": "Would Special",
   "category": "Dessert",
   "price": 20.71,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0104",
   "restaurant_id": "REST011",
   "name": "Phone Plate",
   "category": "Dessert",
   "price": 19.84,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0105",
   "restaurant_id": "REST011",
   "name": "Whether Plate",
   "category": "Beverage",
   "price": 21.74,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0106",
   "restaurant_id": "REST011",
   "name": "Sport Delight",
   "category": "Beverage",
   "price": 19.98,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0107",
   "restaurant_id": "REST011",
   "name": "Close Special",
   "category": "Main Course",
   "price": 13.04,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0108",
   "restaurant_id": "REST011",
   "name": "Find Dish",
   "category": "Side Dish",
   "price": 27.65,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0109",
   "restaurant_id": "REST011",
   "name": "Action Special",
   "category": "Beverage",
   "price": 6.32,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0110",
   "restaurant_id": "REST011",
   "name": "Page Delight",
   "category": "Dessert",
   "price": 28.42,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0111",
   "restaurant_id": "REST012",
   "name": "Arrive Special",
   "category": "Main Course",
   "price": 27.32,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0112",
   "restaurant_id": "REST012",
   "name": "Be Plate",
   "category": "Appetizer",
   "price": 17.19,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0113",
   "restaurant_id": "REST012",
   "name": "Join Special",
   "category": "Beverage",
   "price": 22.6,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0114",
   "restaurant_id": "REST012",
   "name": "Television Delight",
   "category": "Main Course",
   "price": 21.41,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0115",
   "restaurant_id": "REST012",
   "name": "Speech Special",
   "category": "Side Dish",
   "price": 16.32,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0116",
   "restaurant_id": "REST012",
   "name": "Adult Dish",
   "category": "Appetizer",
   "price": 26.35,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0117",
   "restaurant_id": "REST012",
   "name": "Walk Dish",
   "category": "Dessert",
   "price": 20.11,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0118",
   "restaurant_id": "REST012",
   "name": "Away Special",
   "category": "Beverage",
   "price": 29.83,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0119",
   "restaurant_id": "REST012",
   "name": "Find Plate",
   "category": "Side Dish",
   "price": 25.12,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0120",
   "restaurant_id": "REST012",
   "name": "Rather Delight",
   "category": "Main Course",
   "price": 17.39,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0121",
   "restaurant_id": "REST013",
   "name": "Measure Plate",
   "category": "Dessert",
   "price": 18.28,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0122",
   "restaurant_id": "REST013",
   "name": "Say Delight",
   "category": "Appetizer",
   "price": 9.47,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0123",
   "restaurant_id": "REST013",
   "name": "Right Plate",
   "category": "Main Course",
   "price": 24.92,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0124",
   "restaurant_id": "REST013",
   "name": "Term Dish",
   "category": "Beverage",
   "price": 25.48,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0125",
   "restaurant_id": "REST013",
   "name": "And Special",
   "category": "Dessert",
   "price": 11.68,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0126",
   "restaurant_id": "REST013",
   "name": "Force Plate",
   "category": "Appetizer",
   "price": 6.2,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0127",
   "restaurant_id": "REST013",
   "name": "Foot Dish",
   "category": "Dessert",
   "price": 14.57,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0128",
   "restaurant_id": "REST013",
   "name": "Car Dish",
   "category": "Dessert",
   "price": 7.71,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0129",
   "restaurant_id": "REST013",
   "name": "Up Delight",
   "category": "Beverage",
   "price": 14.07,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0130",
   "restaurant_id": "REST013",
   "name": "Fund Plate",
   "category": "Beverage",
   "price": 13.55,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0131",
   "restaurant_id": "REST014",
   "name": "Evidence Delight",
   "category": "Side Dish",
   "price": 23.18,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0132",
   "restaurant_id": "REST014",
   "name": "Religious Dish",
   "category": "Appetizer",
   "price": 9.5,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0133",
   "restaurant_id": "REST014",
   "name": "Analysis Plate",
   "category": "Beverage",
   "price": 14.59,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0134",
   "restaurant_id": "REST014",
   "name": "Current Special",
   "category": "Appetizer",
   "price": 7.39,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0135",
   "restaurant_id": "REST014",
   "name": "Theory Special",
   "category": "Dessert",
   "price": 7.09,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0136",
   "restaurant_id": "REST014",
   "name": "Than Special",
   "category": "Side Dish",
   "price": 23.68,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0137",
   "restaurant_id": "REST014",
   "name": "Plant Delight",
   "category": "Dessert",
   "price": 9.74,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0138",
   "restaurant_id": "REST014",
   "name": "Suffer Dish",
   "category": "Dessert",
   "price": 28.06,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0139",
   "restaurant_id": "REST014",
   "name": "Task Special",
   "category": "Appetizer",
   "price": 13.59,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0140",
   "restaurant_id": "REST014",
   "name": "Conference Plate",
   "category": "Side Dish",
   "price": 17.11,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0141",
   "restaurant_id": "REST015",
   "name": "Friend Special",
   "category": "Beverage",
   "price": 18.4,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0142",
   "restaurant_id": "REST015",
   "name": "Military Dish",
   "category": "Appetizer",
   "price": 15.7,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0143",
   "restaurant_id": "REST015",
   "name": "National Plate",
   "category": "Dessert",
   "price": 15.54,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0144",
   "restaurant_id": "REST015",
   "name": "Course Plate",
   "category": "Appetizer",
   "price": 26.28,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0145",
   "restaurant_id": "REST015",
   "name": "Without Plate",
   "category": "Side Dish",
   "price": 16.53,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0146",
   "restaurant_id": "REST015",
   "name": "Open Delight",
   "category": "Side Dish",
   "price": 11.03,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0147",
   "restaurant_id": "REST015",
   "name": "Family Dish",
   "category": "Dessert",
   "price": 28.46,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0148",
   "restaurant_id": "REST015",
   "name": "Sound Dish",
   "category": "Dessert",
   "price": 8.24,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0149",
   "restaurant_id": "REST015",
   "name": "See Dish",
   "category": "Beverage",
   "price": 18.97,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0150",
   "restaurant_id": "REST015",
   "name": "Peace Plate",
   "category": "Beverage",
   "price": 7.47,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0151",
   "restaurant_id": "REST016",
   "name": "Interesting Delight",
   "category": "Appetizer",
   "price": 13.33,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0152",
   "restaurant_id": "REST016",
   "name": "Against Delight",
   "category": "Beverage",
   "price": 17.98,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0153",
   "restaurant_id": "REST016",
   "name": "Else Delight",
   "category": "Dessert",
   "price": 27.96,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0154",
   "restaurant_id": "REST016",
   "name": "Remain Dish",
   "category": "Dessert",
   "price": 19.65,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0155",
   "restaurant_id": "REST016",
   "name": "Catch Plate",
   "category": "Main Course",
   "price": 19.44,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0156",
   "restaurant_id": "REST016",
   "name": "Lot Delight",
   "category": "Main Course",
   "price": 13.08,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0157",
   "restaurant_id": "REST016",
   "name": "Around Delight",
   "category": "Main Course",
   "price": 29.16,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0158",
   "restaurant_id": "REST016",
   "name": "Spring Delight",
   "category": "Side Dish",
   "price": 26,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0159",
   "restaurant_id": "REST016",
   "name": "Ball Special",
   "category": "Beverage",
   "price": 11.45,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0160",
   "restaurant_id": "REST016",
   "name": "Player Dish",
   "category": "Appetizer",
   "price": 16.57,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0161",
   "restaurant_id": "REST017",
   "name": "Allow Delight",
   "category": "Side Dish",
   "price": 6.06,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0162",
   "restaurant_id": "REST017",
   "name": "Five Plate",
   "category": "Side Dish",
   "price": 18.26,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0163",
   "restaurant_id": "REST017",
   "name": "Show Plate",
   "category": "Main Course",
   "price": 13.35,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0164",
   "restaurant_id": "REST017",
   "name": "Agent Dish",
   "category": "Dessert",
   "price": 21.42,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0165",
   "restaurant_id": "REST017",
   "name": "Power Delight",
   "category": "Appetizer",
   "price": 20.53,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0166",
   "restaurant_id": "REST017",
   "name": "Other Special",
   "category": "Side Dish",
   "price": 25.42,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0167",
   "restaurant_id": "REST017",
   "name": "This Delight",
   "category": "Appetizer",
   "price": 12.16,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0168",
   "restaurant_id": "REST017",
   "name": "Actually Delight",
   "category": "Dessert",
   "price": 12.58,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0169",
   "restaurant_id": "REST017",
   "name": "Somebody Plate",
   "category": "Side Dish",
   "price": 14.68,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0170",
   "restaurant_id": "REST017",
   "name": "Pay Dish",
   "category": "Main Course",
   "price": 7.23,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0171",
   "restaurant_id": "REST018",
   "name": "Opportunity Plate",
   "category": "Appetizer",
   "price": 6.19,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0172",
   "restaurant_id": "REST018",
   "name": "That Dish",
   "category": "Side Dish",
   "price": 15.21,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0173",
   "restaurant_id": "REST018",
   "name": "Feel Special",
   "category": "Beverage",
   "price": 26.2,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0174",
   "restaurant_id": "REST018",
   "name": "Hand Delight",
   "category": "Beverage",
   "price": 21.55,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0175",
   "restaurant_id": "REST018",
   "name": "Agent Special",
   "category": "Beverage",
   "price": 19.63,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0176",
   "restaurant_id": "REST018",
   "name": "Case Delight",
   "category": "Dessert",
   "price": 23.76,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0177",
   "restaurant_id": "REST018",
   "name": "Environmental Special",
   "category": "Dessert",
   "price": 17.36,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0178",
   "restaurant_id": "REST018",
   "name": "Need Dish",
   "category": "Beverage",
   "price": 19,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0179",
   "restaurant_id": "REST018",
   "name": "Day Dish",
   "category": "Side Dish",
   "price": 7.33,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0180",
   "restaurant_id": "REST018",
   "name": "Drug Special",
   "category": "Beverage",
   "price": 29.5,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0181",
   "restaurant_id": "REST019",
   "name": "Hour Dish",
   "category": "Beverage",
   "price": 29.56,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0182",
   "restaurant_id": "REST019",
   "name": "Laugh Plate",
   "category": "Dessert",
   "price": 10.52,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0183",
   "restaurant_id": "REST019",
   "name": "Than Dish",
   "category": "Appetizer",
   "price": 8.86,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0184",
   "restaurant_id": "REST019",
   "name": "Minute Special",
   "category": "Beverage",
   "price": 7.65,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0185",
   "restaurant_id": "REST019",
   "name": "Second Special",
   "category": "Main Course",
   "price": 27.48,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0186",
   "restaurant_id": "REST019",
   "name": "Movement Special",
   "category": "Side Dish",
   "price": 28.9,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0187",
   "restaurant_id": "REST019",
   "name": "Occur Delight",
   "category": "Main Course",
   "price": 14.68,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0188",
   "restaurant_id": "REST019",
   "name": "Population Delight",
   "category": "Dessert",
   "price": 8.53,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0189",
   "restaurant_id": "REST019",
   "name": "Itself Dish",
   "category": "Main Course",
   "price": 12.25,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0190",
   "restaurant_id": "REST019",
   "name": "House Special",
   "category": "Main Course",
   "price": 22.92,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0191",
   "restaurant_id": "REST020",
   "name": "From Delight",
   "category": "Appetizer",
   "price": 28.21,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0192",
   "restaurant_id": "REST020",
   "name": "Western Delight",
   "category": "Side Dish",
   "price": 17,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0193",
   "restaurant_id": "REST020",
   "name": "May Dish",
   "category": "Side Dish",
   "price": 6.62,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0194",
   "restaurant_id": "REST020",
   "name": "International Delight",
   "category": "Beverage",
   "price": 24.82,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0195",
   "restaurant_id": "REST020",
   "name": "Money Special",
   "category": "Dessert",
   "price": 27,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0196",
   "restaurant_id": "REST020",
   "name": "Value Special",
   "category": "Dessert",
   "price": 29.3,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0197",
   "restaurant_id": "REST020",
   "name": "North Delight",
   "category": "Beverage",
   "price": 12.03,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0198",
   "restaurant_id": "REST020",
   "name": "Play Delight",
   "category": "Main Course",
   "price": 24.19,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0199",
   "restaurant_id": "REST020",
   "name": "Allow Delight",
   "category": "Appetizer",
   "price": 20.59,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0200",
   "restaurant_id": "REST020",
   "name": "Laugh Plate",
   "category": "Dessert",
   "price": 8.4,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0201",
   "restaurant_id": "REST021",
   "name": "Garden Delight",
   "category": "Appetizer",
   "price": 12.57,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0202",
   "restaurant_id": "REST021",
   "name": "Art Plate",
   "category": "Appetizer",
   "price": 27.43,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0203",
   "restaurant_id": "REST021",
   "name": "Set Plate",
   "category": "Side Dish",
   "price": 21.19,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0204",
   "restaurant_id": "REST021",
   "name": "Call Delight",
   "category": "Dessert",
   "price": 27.71,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0205",
   "restaurant_id": "REST021",
   "name": "Month Plate",
   "category": "Dessert",
   "price": 19.99,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0206",
   "restaurant_id": "REST021",
   "name": "Own Delight",
   "category": "Beverage",
   "price": 14.33,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0207",
   "restaurant_id": "REST021",
   "name": "Fire Dish",
   "category": "Dessert",
   "price": 16.6,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0208",
   "restaurant_id": "REST021",
   "name": "Suddenly Special",
   "category": "Main Course",
   "price": 26.18,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0209",
   "restaurant_id": "REST021",
   "name": "Training Special",
   "category": "Main Course",
   "price": 16.26,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0210",
   "restaurant_id": "REST021",
   "name": "Of Plate",
   "category": "Main Course",
   "price": 20.62,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0211",
   "restaurant_id": "REST022",
   "name": "Together Special",
   "category": "Appetizer",
   "price": 19.09,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0212",
   "restaurant_id": "REST022",
   "name": "Prepare Delight",
   "category": "Dessert",
   "price": 19.8,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0213",
   "restaurant_id": "REST022",
   "name": "Speak Special",
   "category": "Main Course",
   "price": 10.25,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0214",
   "restaurant_id": "REST022",
   "name": "Loss Delight",
   "category": "Dessert",
   "price": 10.67,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0215",
   "restaurant_id": "REST022",
   "name": "Society Delight",
   "category": "Dessert",
   "price": 12.39,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0216",
   "restaurant_id": "REST022",
   "name": "Call Special",
   "category": "Main Course",
   "price": 7.04,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0217",
   "restaurant_id": "REST022",
   "name": "Travel Special",
   "category": "Beverage",
   "price": 17.95,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0218",
   "restaurant_id": "REST022",
   "name": "Quality Special",
   "category": "Dessert",
   "price": 15.8,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0219",
   "restaurant_id": "REST022",
   "name": "Sister Special",
   "category": "Side Dish",
   "price": 6.22,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0220",
   "restaurant_id": "REST022",
   "name": "Attack Delight",
   "category": "Appetizer",
   "price": 21.68,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0221",
   "restaurant_id": "REST023",
   "name": "Figure Plate",
   "category": "Appetizer",
   "price": 19.85,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0222",
   "restaurant_id": "REST023",
   "name": "Possible Delight",
   "category": "Main Course",
   "price": 26.41,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0223",
   "restaurant_id": "REST023",
   "name": "Improve Delight",
   "category": "Beverage",
   "price": 10.77,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0224",
   "restaurant_id": "REST023",
   "name": "Picture Special",
   "category": "Dessert",
   "price": 14.7,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0225",
   "restaurant_id": "REST023",
   "name": "Score Delight",
   "category": "Beverage",
   "price": 26.58,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0226",
   "restaurant_id": "REST023",
   "name": "Specific Delight",
   "category": "Appetizer",
   "price": 26.07,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0227",
   "restaurant_id": "REST023",
   "name": "It Delight",
   "category": "Appetizer",
   "price": 22.25,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0228",
   "restaurant_id": "REST023",
   "name": "Weight Plate",
   "category": "Dessert",
   "price": 27.46,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0229",
   "restaurant_id": "REST023",
   "name": "Forward Delight",
   "category": "Dessert",
   "price": 9.27,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0230",
   "restaurant_id": "REST023",
   "name": "Kind Delight",
   "category": "Side Dish",
   "price": 26.02,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0231",
   "restaurant_id": "REST024",
   "name": "Get Plate",
   "category": "Main Course",
   "price": 28.03,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0232",
   "restaurant_id": "REST024",
   "name": "Use Dish",
   "category": "Main Course",
   "price": 11.25,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0233",
   "restaurant_id": "REST024",
   "name": "Article Plate",
   "category": "Main Course",
   "price": 11.1,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0234",
   "restaurant_id": "REST024",
   "name": "Idea Special",
   "category": "Beverage",
   "price": 18.58,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0235",
   "restaurant_id": "REST024",
   "name": "Simple Plate",
   "category": "Dessert",
   "price": 21.18,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0236",
   "restaurant_id": "REST024",
   "name": "Them Special",
   "category": "Beverage",
   "price": 25.89,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0237",
   "restaurant_id": "REST024",
   "name": "Throughout Plate",
   "category": "Appetizer",
   "price": 25.86,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0238",
   "restaurant_id": "REST024",
   "name": "Hot Dish",
   "category": "Dessert",
   "price": 11.42,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0239",
   "restaurant_id": "REST024",
   "name": "Someone Plate",
   "category": "Appetizer",
   "price": 29.63,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0240",
   "restaurant_id": "REST024",
   "name": "Still Delight",
   "category": "Main Course",
   "price": 17.66,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0241",
   "restaurant_id": "REST025",
   "name": "Month Plate",
   "category": "Appetizer",
   "price": 7.54,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0242",
   "restaurant_id": "REST025",
   "name": "Use Dish",
   "category": "Side Dish",
   "price": 12.52,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0243",
   "restaurant_id": "REST025",
   "name": "Early Special",
   "category": "Appetizer",
   "price": 13.93,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0244",
   "restaurant_id": "REST025",
   "name": "Meeting Plate",
   "category": "Side Dish",
   "price": 15.48,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0245",
   "restaurant_id": "REST025",
   "name": "Chance Delight",
   "category": "Side Dish",
   "price": 18.76,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0246",
   "restaurant_id": "REST025",
   "name": "Foreign Special",
   "category": "Beverage",
   "price": 15.01,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0247",
   "restaurant_id": "REST025",
   "name": "Pass Dish",
   "category": "Main Course",
   "price": 24.37,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0248",
   "restaurant_id": "REST025",
   "name": "Game Dish",
   "category": "Appetizer",
   "price": 25.51,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0249",
   "restaurant_id": "REST025",
   "name": "Leg Plate",
   "category": "Side Dish",
   "price": 9.31,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0250",
   "restaurant_id": "REST025",
   "name": "Message Delight",
   "category": "Side Dish",
   "price": 20.25,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0251",
   "restaurant_id": "REST026",
   "name": "Body Dish",
   "category": "Side Dish",
   "price": 7.54,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0252",
   "restaurant_id": "REST026",
   "name": "Range Delight",
   "category": "Beverage",
   "price": 12.31,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0253",
   "restaurant_id": "REST026",
   "name": "Administration Delight",
   "category": "Main Course",
   "price": 8.82,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0254",
   "restaurant_id": "REST026",
   "name": "Smile Delight",
   "category": "Beverage",
   "price": 17.64,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0255",
   "restaurant_id": "REST026",
   "name": "Firm Delight",
   "category": "Side Dish",
   "price": 21.11,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0256",
   "restaurant_id": "REST026",
   "name": "Country Delight",
   "category": "Dessert",
   "price": 11.22,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0257",
   "restaurant_id": "REST026",
   "name": "Wife Plate",
   "category": "Beverage",
   "price": 10.56,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0258",
   "restaurant_id": "REST026",
   "name": "Range Special",
   "category": "Side Dish",
   "price": 28.11,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0259",
   "restaurant_id": "REST026",
   "name": "Relate Special",
   "category": "Appetizer",
   "price": 11.17,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0260",
   "restaurant_id": "REST026",
   "name": "Know Delight",
   "category": "Beverage",
   "price": 10.59,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0261",
   "restaurant_id": "REST027",
   "name": "Indeed Special",
   "category": "Appetizer",
   "price": 29.47,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0262",
   "restaurant_id": "REST027",
   "name": "Police Plate",
   "category": "Beverage",
   "price": 24.99,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0263",
   "restaurant_id": "REST027",
   "name": "Set Dish",
   "category": "Beverage",
   "price": 17.08,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0264",
   "restaurant_id": "REST027",
   "name": "Certain Delight",
   "category": "Main Course",
   "price": 8.39,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0265",
   "restaurant_id": "REST027",
   "name": "Research Dish",
   "category": "Dessert",
   "price": 21.03,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0266",
   "restaurant_id": "REST027",
   "name": "Right Special",
   "category": "Dessert",
   "price": 11.32,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0267",
   "restaurant_id": "REST027",
   "name": "Or Dish",
   "category": "Dessert",
   "price": 9.46,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0268",
   "restaurant_id": "REST027",
   "name": "Medical Plate",
   "category": "Beverage",
   "price": 18.57,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0269",
   "restaurant_id": "REST027",
   "name": "Surface Special",
   "category": "Side Dish",
   "price": 6.5,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0270",
   "restaurant_id": "REST027",
   "name": "Entire Special",
   "category": "Appetizer",
   "price": 15.3,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0271",
   "restaurant_id": "REST028",
   "name": "Take Delight",
   "category": "Dessert",
   "price": 24.62,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0272",
   "restaurant_id": "REST028",
   "name": "Though Dish",
   "category": "Dessert",
   "price": 21.31,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0273",
   "restaurant_id": "REST028",
   "name": "Prove Dish",
   "category": "Side Dish",
   "price": 13.13,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0274",
   "restaurant_id": "REST028",
   "name": "Skill Delight",
   "category": "Beverage",
   "price": 20.32,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0275",
   "restaurant_id": "REST028",
   "name": "Share Plate",
   "category": "Beverage",
   "price": 13.09,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0276",
   "restaurant_id": "REST028",
   "name": "Two Dish",
   "category": "Appetizer",
   "price": 23.79,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0277",
   "restaurant_id": "REST028",
   "name": "Tonight Delight",
   "category": "Dessert",
   "price": 13.88,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0278",
   "restaurant_id": "REST028",
   "name": "Seat Dish",
   "category": "Main Course",
   "price": 17.93,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0279",
   "restaurant_id": "REST028",
   "name": "Find Delight",
   "category": "Beverage",
   "price": 22.39,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0280",
   "restaurant_id": "REST028",
   "name": "Seek Special",
   "category": "Appetizer",
   "price": 9.46,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0281",
   "restaurant_id": "REST029",
   "name": "At Dish",
   "category": "Appetizer",
   "price": 10.77,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0282",
   "restaurant_id": "REST029",
   "name": "Spend Delight",
   "category": "Dessert",
   "price": 9.53,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0283",
   "restaurant_id": "REST029",
   "name": "Respond Special",
   "category": "Appetizer",
   "price": 17.85,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0284",
   "restaurant_id": "REST029",
   "name": "Just Delight",
   "category": "Main Course",
   "price": 16.41,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0285",
   "restaurant_id": "REST029",
   "name": "Full Special",
   "category": "Side Dish",
   "price": 13.67,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0286",
   "restaurant_id": "REST029",
   "name": "Compare Special",
   "category": "Dessert",
   "price": 22.81,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0287",
   "restaurant_id": "REST029",
   "name": "Site Delight",
   "category": "Main Course",
   "price": 9.32,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0288",
   "restaurant_id": "REST029",
   "name": "Through Plate",
   "category": "Main Course",
   "price": 20.44,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0289",
   "restaurant_id": "REST029",
   "name": "Decade Delight",
   "category": "Dessert",
   "price": 15.65,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0290",
   "restaurant_id": "REST029",
   "name": "Window Plate",
   "category": "Dessert",
   "price": 13.05,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0291",
   "restaurant_id": "REST030",
   "name": "Everybody Dish",
   "category": "Main Course",
   "price": 14.46,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0292",
   "restaurant_id": "REST030",
   "name": "Behind Special",
   "category": "Side Dish",
   "price": 28.45,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0293",
   "restaurant_id": "REST030",
   "name": "Religious Special",
   "category": "Side Dish",
   "price": 18.47,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0294",
   "restaurant_id": "REST030",
   "name": "Eye Plate",
   "category": "Beverage",
   "price": 29.1,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0295",
   "restaurant_id": "REST030",
   "name": "Gun Dish",
   "category": "Side Dish",
   "price": 22.49,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0296",
   "restaurant_id": "REST030",
   "name": "Point Delight",
   "category": "Beverage",
   "price": 15.36,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0297",
   "restaurant_id": "REST030",
   "name": "Or Dish",
   "category": "Appetizer",
   "price": 7.46,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0298",
   "restaurant_id": "REST030",
   "name": "Someone Plate",
   "category": "Side Dish",
   "price": 21.23,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0299",
   "restaurant_id": "REST030",
   "name": "Allow Delight",
   "category": "Main Course",
   "price": 16.94,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0300",
   "restaurant_id": "REST030",
   "name": "Modern Special",
   "category": "Main Course",
   "price": 19.17,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0301",
   "restaurant_id": "REST031",
   "name": "Tell Plate",
   "category": "Dessert",
   "price": 27.01,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0302",
   "restaurant_id": "REST031",
   "name": "Picture Delight",
   "category": "Side Dish",
   "price": 9.97,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0303",
   "restaurant_id": "REST031",
   "name": "Past Special",
   "category": "Appetizer",
   "price": 27.22,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0304",
   "restaurant_id": "REST031",
   "name": "However Delight",
   "category": "Dessert",
   "price": 21.41,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0305",
   "restaurant_id": "REST031",
   "name": "Skin Special",
   "category": "Side Dish",
   "price": 20.65,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0306",
   "restaurant_id": "REST031",
   "name": "Kid Delight",
   "category": "Side Dish",
   "price": 15.94,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0307",
   "restaurant_id": "REST031",
   "name": "Open Plate",
   "category": "Appetizer",
   "price": 29.26,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0308",
   "restaurant_id": "REST031",
   "name": "Rather Plate",
   "category": "Appetizer",
   "price": 8.47,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0309",
   "restaurant_id": "REST031",
   "name": "Human Dish",
   "category": "Beverage",
   "price": 10.18,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0310",
   "restaurant_id": "REST031",
   "name": "Choice Plate",
   "category": "Side Dish",
   "price": 18.62,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0311",
   "restaurant_id": "REST032",
   "name": "Nation Dish",
   "category": "Appetizer",
   "price": 20.47,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0312",
   "restaurant_id": "REST032",
   "name": "However Special",
   "category": "Dessert",
   "price": 6.93,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0313",
   "restaurant_id": "REST032",
   "name": "Team Plate",
   "category": "Main Course",
   "price": 24.09,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0314",
   "restaurant_id": "REST032",
   "name": "Whose Dish",
   "category": "Side Dish",
   "price": 12.28,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0315",
   "restaurant_id": "REST032",
   "name": "Three Delight",
   "category": "Main Course",
   "price": 22.85,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0316",
   "restaurant_id": "REST032",
   "name": "Anyone Plate",
   "category": "Main Course",
   "price": 20.83,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0317",
   "restaurant_id": "REST032",
   "name": "Quality Plate",
   "category": "Main Course",
   "price": 24.17,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0318",
   "restaurant_id": "REST032",
   "name": "Their Plate",
   "category": "Beverage",
   "price": 27.78,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0319",
   "restaurant_id": "REST032",
   "name": "Political Delight",
   "category": "Beverage",
   "price": 25.08,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0320",
   "restaurant_id": "REST032",
   "name": "Great Special",
   "category": "Side Dish",
   "price": 7.62,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0321",
   "restaurant_id": "REST033",
   "name": "Suffer Delight",
   "category": "Main Course",
   "price": 24.84,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0322",
   "restaurant_id": "REST033",
   "name": "Different Special",
   "category": "Dessert",
   "price": 29.52,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0323",
   "restaurant_id": "REST033",
   "name": "Minute Delight",
   "category": "Beverage",
   "price": 16.64,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0324",
   "restaurant_id": "REST033",
   "name": "East Dish",
   "category": "Appetizer",
   "price": 29.12,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0325",
   "restaurant_id": "REST033",
   "name": "Family Delight",
   "category": "Appetizer",
   "price": 15.55,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0326",
   "restaurant_id": "REST033",
   "name": "Beat Plate",
   "category": "Appetizer",
   "price": 15.16,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0327",
   "restaurant_id": "REST033",
   "name": "Walk Plate",
   "category": "Main Course",
   "price": 9.94,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0328",
   "restaurant_id": "REST033",
   "name": "Ask Special",
   "category": "Dessert",
   "price": 29.91,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0329",
   "restaurant_id": "REST033",
   "name": "Knowledge Delight",
   "category": "Beverage",
   "price": 25.52,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0330",
   "restaurant_id": "REST033",
   "name": "Show Special",
   "category": "Dessert",
   "price": 19.83,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0331",
   "restaurant_id": "REST034",
   "name": "Pm Delight",
   "category": "Beverage",
   "price": 21.39,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0332",
   "restaurant_id": "REST034",
   "name": "Bit Dish",
   "category": "Appetizer",
   "price": 24.13,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0333",
   "restaurant_id": "REST034",
   "name": "Note Plate",
   "category": "Dessert",
   "price": 8.88,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0334",
   "restaurant_id": "REST034",
   "name": "Look Plate",
   "category": "Dessert",
   "price": 24.42,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0335",
   "restaurant_id": "REST034",
   "name": "Operation Delight",
   "category": "Beverage",
   "price": 9.39,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0336",
   "restaurant_id": "REST034",
   "name": "Old Dish",
   "category": "Beverage",
   "price": 8.22,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0337",
   "restaurant_id": "REST034",
   "name": "Money Delight",
   "category": "Appetizer",
   "price": 11.65,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0338",
   "restaurant_id": "REST034",
   "name": "Operation Dish",
   "category": "Beverage",
   "price": 12,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0339",
   "restaurant_id": "REST034",
   "name": "Career Plate",
   "category": "Main Course",
   "price": 25.77,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0340",
   "restaurant_id": "REST034",
   "name": "Along Plate",
   "category": "Side Dish",
   "price": 29.47,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0341",
   "restaurant_id": "REST035",
   "name": "Crime Plate",
   "category": "Main Course",
   "price": 13.32,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0342",
   "restaurant_id": "REST035",
   "name": "Draw Special",
   "category": "Appetizer",
   "price": 15.21,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0343",
   "restaurant_id": "REST035",
   "name": "Through Plate",
   "category": "Dessert",
   "price": 19.33,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0344",
   "restaurant_id": "REST035",
   "name": "Once Special",
   "category": "Beverage",
   "price": 23.55,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0345",
   "restaurant_id": "REST035",
   "name": "Suffer Special",
   "category": "Appetizer",
   "price": 15.37,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0346",
   "restaurant_id": "REST035",
   "name": "Minute Special",
   "category": "Beverage",
   "price": 21.98,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0347",
   "restaurant_id": "REST035",
   "name": "Figure Special",
   "category": "Appetizer",
   "price": 29.81,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0348",
   "restaurant_id": "REST035",
   "name": "News Plate",
   "category": "Appetizer",
   "price": 15.5,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0349",
   "restaurant_id": "REST035",
   "name": "Option Dish",
   "category": "Beverage",
   "price": 26.5,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0350",
   "restaurant_id": "REST035",
   "name": "Yet Dish",
   "category": "Main Course",
   "price": 12.95,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0351",
   "restaurant_id": "REST036",
   "name": "Analysis Dish",
   "category": "Beverage",
   "price": 14.86,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0352",
   "restaurant_id": "REST036",
   "name": "The Dish",
   "category": "Side Dish",
   "price": 6.7,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0353",
   "restaurant_id": "REST036",
   "name": "Current Plate",
   "category": "Dessert",
   "price": 7.22,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0354",
   "restaurant_id": "REST036",
   "name": "Final Special",
   "category": "Beverage",
   "price": 15.11,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0355",
   "restaurant_id": "REST036",
   "name": "Light Delight",
   "category": "Side Dish",
   "price": 12.83,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0356",
   "restaurant_id": "REST036",
   "name": "Herself Special",
   "category": "Beverage",
   "price": 17.06,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0357",
   "restaurant_id": "REST036",
   "name": "Education Special",
   "category": "Beverage",
   "price": 27,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0358",
   "restaurant_id": "REST036",
   "name": "Organization Plate",
   "category": "Beverage",
   "price": 8.32,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0359",
   "restaurant_id": "REST036",
   "name": "Field Special",
   "category": "Dessert",
   "price": 23.49,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0360",
   "restaurant_id": "REST036",
   "name": "Opportunity Plate",
   "category": "Beverage",
   "price": 12.7,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0361",
   "restaurant_id": "REST037",
   "name": "Economic Plate",
   "category": "Side Dish",
   "price": 12.75,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0362",
   "restaurant_id": "REST037",
   "name": "Study Delight",
   "category": "Main Course",
   "price": 16.68,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0363",
   "restaurant_id": "REST037",
   "name": "Trade Plate",
   "category": "Side Dish",
   "price": 15.08,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0364",
   "restaurant_id": "REST037",
   "name": "Much Delight",
   "category": "Main Course",
   "price": 15.65,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0365",
   "restaurant_id": "REST037",
   "name": "Site Delight",
   "category": "Main Course",
   "price": 22.25,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0366",
   "restaurant_id": "REST037",
   "name": "Site Special",
   "category": "Beverage",
   "price": 16.49,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0367",
   "restaurant_id": "REST037",
   "name": "Turn Plate",
   "category": "Beverage",
   "price": 17.12,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0368",
   "restaurant_id": "REST037",
   "name": "Develop Plate",
   "category": "Beverage",
   "price": 28.72,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0369",
   "restaurant_id": "REST037",
   "name": "Marriage Delight",
   "category": "Beverage",
   "price": 26.48,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0370",
   "restaurant_id": "REST037",
   "name": "Threat Special",
   "category": "Side Dish",
   "price": 7.17,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0371",
   "restaurant_id": "REST038",
   "name": "Certain Plate",
   "category": "Beverage",
   "price": 23.74,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0372",
   "restaurant_id": "REST038",
   "name": "Language Plate",
   "category": "Dessert",
   "price": 19.67,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0373",
   "restaurant_id": "REST038",
   "name": "Be Dish",
   "category": "Appetizer",
   "price": 12.13,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0374",
   "restaurant_id": "REST038",
   "name": "Voice Dish",
   "category": "Main Course",
   "price": 13.77,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0375",
   "restaurant_id": "REST038",
   "name": "Writer Dish",
   "category": "Appetizer",
   "price": 15.66,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0376",
   "restaurant_id": "REST038",
   "name": "Wind Plate",
   "category": "Main Course",
   "price": 6.43,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0377",
   "restaurant_id": "REST038",
   "name": "Book Delight",
   "category": "Main Course",
   "price": 22.93,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0378",
   "restaurant_id": "REST038",
   "name": "Herself Delight",
   "category": "Main Course",
   "price": 26.78,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0379",
   "restaurant_id": "REST038",
   "name": "Would Dish",
   "category": "Main Course",
   "price": 14.36,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0380",
   "restaurant_id": "REST038",
   "name": "Arrive Delight",
   "category": "Side Dish",
   "price": 17.22,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0381",
   "restaurant_id": "REST039",
   "name": "Here Delight",
   "category": "Side Dish",
   "price": 15.08,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0382",
   "restaurant_id": "REST039",
   "name": "Radio Delight",
   "category": "Side Dish",
   "price": 7.15,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0383",
   "restaurant_id": "REST039",
   "name": "Question Delight",
   "category": "Main Course",
   "price": 27.48,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0384",
   "restaurant_id": "REST039",
   "name": "Energy Delight",
   "category": "Side Dish",
   "price": 28.9,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0385",
   "restaurant_id": "REST039",
   "name": "Official Delight",
   "category": "Appetizer",
   "price": 18.45,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0386",
   "restaurant_id": "REST039",
   "name": "Suddenly Plate",
   "category": "Appetizer",
   "price": 17.4,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0387",
   "restaurant_id": "REST039",
   "name": "Spring Plate",
   "category": "Dessert",
   "price": 9.98,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0388",
   "restaurant_id": "REST039",
   "name": "Reflect Delight",
   "category": "Appetizer",
   "price": 16.5,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0389",
   "restaurant_id": "REST039",
   "name": "Million Delight",
   "category": "Side Dish",
   "price": 24.83,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0390",
   "restaurant_id": "REST039",
   "name": "Night Plate",
   "category": "Side Dish",
   "price": 25.79,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0391",
   "restaurant_id": "REST040",
   "name": "Well Dish",
   "category": "Main Course",
   "price": 21.12,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0392",
   "restaurant_id": "REST040",
   "name": "Expert Dish",
   "category": "Appetizer",
   "price": 26.02,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0393",
   "restaurant_id": "REST040",
   "name": "Positive Delight",
   "category": "Dessert",
   "price": 18.21,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0394",
   "restaurant_id": "REST040",
   "name": "Key Special",
   "category": "Appetizer",
   "price": 24.57,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0395",
   "restaurant_id": "REST040",
   "name": "Film Special",
   "category": "Dessert",
   "price": 24.66,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0396",
   "restaurant_id": "REST040",
   "name": "Know Special",
   "category": "Beverage",
   "price": 10.27,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0397",
   "restaurant_id": "REST040",
   "name": "Debate Delight",
   "category": "Side Dish",
   "price": 17.75,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0398",
   "restaurant_id": "REST040",
   "name": "Thus Plate",
   "category": "Beverage",
   "price": 8.31,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0399",
   "restaurant_id": "REST040",
   "name": "Question Special",
   "category": "Appetizer",
   "price": 7.52,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0400",
   "restaurant_id": "REST040",
   "name": "Have Special",
   "category": "Beverage",
   "price": 24.42,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0401",
   "restaurant_id": "REST041",
   "name": "Former Dish",
   "category": "Side Dish",
   "price": 27.92,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0402",
   "restaurant_id": "REST041",
   "name": "Question Dish",
   "category": "Beverage",
   "price": 8.2,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0403",
   "restaurant_id": "REST041",
   "name": "Cut Plate",
   "category": "Appetizer",
   "price": 10.56,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0404",
   "restaurant_id": "REST041",
   "name": "Account Plate",
   "category": "Appetizer",
   "price": 16.42,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0405",
   "restaurant_id": "REST041",
   "name": "Church Dish",
   "category": "Appetizer",
   "price": 18.47,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0406",
   "restaurant_id": "REST041",
   "name": "Imagine Dish",
   "category": "Dessert",
   "price": 6.41,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0407",
   "restaurant_id": "REST041",
   "name": "Main Special",
   "category": "Dessert",
   "price": 7.13,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0408",
   "restaurant_id": "REST041",
   "name": "Standard Plate",
   "category": "Side Dish",
   "price": 14.42,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0409",
   "restaurant_id": "REST041",
   "name": "Again Special",
   "category": "Beverage",
   "price": 13.9,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0410",
   "restaurant_id": "REST041",
   "name": "Those Delight",
   "category": "Beverage",
   "price": 28.25,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0411",
   "restaurant_id": "REST042",
   "name": "Ability Special",
   "category": "Main Course",
   "price": 15.31,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0412",
   "restaurant_id": "REST042",
   "name": "Stage Special",
   "category": "Appetizer",
   "price": 24.69,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0413",
   "restaurant_id": "REST042",
   "name": "Population Special",
   "category": "Side Dish",
   "price": 22.57,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0414",
   "restaurant_id": "REST042",
   "name": "Eye Special",
   "category": "Main Course",
   "price": 18.58,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0415",
   "restaurant_id": "REST042",
   "name": "Cold Plate",
   "category": "Main Course",
   "price": 11.46,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0416",
   "restaurant_id": "REST042",
   "name": "Fact Plate",
   "category": "Dessert",
   "price": 16.44,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0417",
   "restaurant_id": "REST042",
   "name": "Record Plate",
   "category": "Beverage",
   "price": 8.78,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0418",
   "restaurant_id": "REST042",
   "name": "Though Delight",
   "category": "Side Dish",
   "price": 16.35,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0419",
   "restaurant_id": "REST042",
   "name": "Answer Plate",
   "category": "Side Dish",
   "price": 29.56,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0420",
   "restaurant_id": "REST042",
   "name": "Shake Plate",
   "category": "Main Course",
   "price": 7.58,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0421",
   "restaurant_id": "REST043",
   "name": "Power Special",
   "category": "Appetizer",
   "price": 18.05,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0422",
   "restaurant_id": "REST043",
   "name": "Every Delight",
   "category": "Dessert",
   "price": 17.57,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0423",
   "restaurant_id": "REST043",
   "name": "Suddenly Special",
   "category": "Main Course",
   "price": 23.27,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0424",
   "restaurant_id": "REST043",
   "name": "Course Special",
   "category": "Side Dish",
   "price": 13.17,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0425",
   "restaurant_id": "REST043",
   "name": "Happy Delight",
   "category": "Side Dish",
   "price": 23.89,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0426",
   "restaurant_id": "REST043",
   "name": "Wrong Delight",
   "category": "Appetizer",
   "price": 9.46,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0427",
   "restaurant_id": "REST043",
   "name": "Avoid Dish",
   "category": "Dessert",
   "price": 9.49,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0428",
   "restaurant_id": "REST043",
   "name": "Fund Delight",
   "category": "Beverage",
   "price": 27.14,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0429",
   "restaurant_id": "REST043",
   "name": "Dog Dish",
   "category": "Beverage",
   "price": 14.86,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0430",
   "restaurant_id": "REST043",
   "name": "Deal Dish",
   "category": "Main Course",
   "price": 23.82,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0431",
   "restaurant_id": "REST044",
   "name": "Hand Delight",
   "category": "Dessert",
   "price": 29.93,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0432",
   "restaurant_id": "REST044",
   "name": "Prevent Dish",
   "category": "Main Course",
   "price": 16.94,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0433",
   "restaurant_id": "REST044",
   "name": "Start Dish",
   "category": "Main Course",
   "price": 26.94,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0434",
   "restaurant_id": "REST044",
   "name": "Whatever Delight",
   "category": "Appetizer",
   "price": 24.02,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0435",
   "restaurant_id": "REST044",
   "name": "Red Dish",
   "category": "Main Course",
   "price": 28.62,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0436",
   "restaurant_id": "REST044",
   "name": "Product Delight",
   "category": "Beverage",
   "price": 25.3,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0437",
   "restaurant_id": "REST044",
   "name": "Management Dish",
   "category": "Appetizer",
   "price": 14.23,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0438",
   "restaurant_id": "REST044",
   "name": "Nothing Delight",
   "category": "Dessert",
   "price": 22.98,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0439",
   "restaurant_id": "REST044",
   "name": "Spring Special",
   "category": "Dessert",
   "price": 20,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0440",
   "restaurant_id": "REST044",
   "name": "What Dish",
   "category": "Appetizer",
   "price": 22.29,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0441",
   "restaurant_id": "REST045",
   "name": "Themselves Plate",
   "category": "Appetizer",
   "price": 26.02,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0442",
   "restaurant_id": "REST045",
   "name": "Fish Plate",
   "category": "Beverage",
   "price": 7,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0443",
   "restaurant_id": "REST045",
   "name": "Her Dish",
   "category": "Appetizer",
   "price": 15.16,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0444",
   "restaurant_id": "REST045",
   "name": "Consider Special",
   "category": "Appetizer",
   "price": 19.61,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0445",
   "restaurant_id": "REST045",
   "name": "Under Delight",
   "category": "Beverage",
   "price": 22.42,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0446",
   "restaurant_id": "REST045",
   "name": "Movie Special",
   "category": "Beverage",
   "price": 8.85,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0447",
   "restaurant_id": "REST045",
   "name": "Impact Plate",
   "category": "Beverage",
   "price": 21.08,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0448",
   "restaurant_id": "REST045",
   "name": "Clearly Plate",
   "category": "Beverage",
   "price": 7.5,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0449",
   "restaurant_id": "REST045",
   "name": "Choose Special",
   "category": "Side Dish",
   "price": 25.8,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0450",
   "restaurant_id": "REST045",
   "name": "Bed Dish",
   "category": "Appetizer",
   "price": 13.85,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0451",
   "restaurant_id": "REST046",
   "name": "Research Dish",
   "category": "Beverage",
   "price": 26.71,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0452",
   "restaurant_id": "REST046",
   "name": "Today Plate",
   "category": "Appetizer",
   "price": 9.7,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0453",
   "restaurant_id": "REST046",
   "name": "Care Dish",
   "category": "Beverage",
   "price": 11.35,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0454",
   "restaurant_id": "REST046",
   "name": "Spring Special",
   "category": "Beverage",
   "price": 28.44,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0455",
   "restaurant_id": "REST046",
   "name": "Require Plate",
   "category": "Side Dish",
   "price": 11.49,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0456",
   "restaurant_id": "REST046",
   "name": "Box Dish",
   "category": "Dessert",
   "price": 16.32,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0457",
   "restaurant_id": "REST046",
   "name": "Go Dish",
   "category": "Beverage",
   "price": 15.52,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0458",
   "restaurant_id": "REST046",
   "name": "Kid Plate",
   "category": "Beverage",
   "price": 10.06,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0459",
   "restaurant_id": "REST046",
   "name": "Close Special",
   "category": "Appetizer",
   "price": 13.37,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0460",
   "restaurant_id": "REST046",
   "name": "Pressure Special",
   "category": "Beverage",
   "price": 13.06,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0461",
   "restaurant_id": "REST047",
   "name": "First Special",
   "category": "Main Course",
   "price": 20.49,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0462",
   "restaurant_id": "REST047",
   "name": "Idea Special",
   "category": "Side Dish",
   "price": 26.82,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0463",
   "restaurant_id": "REST047",
   "name": "Piece Special",
   "category": "Beverage",
   "price": 18.19,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0464",
   "restaurant_id": "REST047",
   "name": "Law Dish",
   "category": "Side Dish",
   "price": 24.3,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0465",
   "restaurant_id": "REST047",
   "name": "Worker Dish",
   "category": "Dessert",
   "price": 29.27,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0466",
   "restaurant_id": "REST047",
   "name": "Set Delight",
   "category": "Appetizer",
   "price": 19.24,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0467",
   "restaurant_id": "REST047",
   "name": "Light Dish",
   "category": "Main Course",
   "price": 20.62,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0468",
   "restaurant_id": "REST047",
   "name": "Happen Dish",
   "category": "Beverage",
   "price": 17.21,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0469",
   "restaurant_id": "REST047",
   "name": "Morning Dish",
   "category": "Dessert",
   "price": 14.4,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0470",
   "restaurant_id": "REST047",
   "name": "Sit Delight",
   "category": "Beverage",
   "price": 29.84,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0471",
   "restaurant_id": "REST048",
   "name": "Half Special",
   "category": "Main Course",
   "price": 9.1,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0472",
   "restaurant_id": "REST048",
   "name": "Way Special",
   "category": "Main Course",
   "price": 10.41,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0473",
   "restaurant_id": "REST048",
   "name": "Whole Special",
   "category": "Side Dish",
   "price": 28.59,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0474",
   "restaurant_id": "REST048",
   "name": "Guess Special",
   "category": "Main Course",
   "price": 26.22,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0475",
   "restaurant_id": "REST048",
   "name": "Light Plate",
   "category": "Appetizer",
   "price": 24.54,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0476",
   "restaurant_id": "REST048",
   "name": "Enter Plate",
   "category": "Side Dish",
   "price": 12.32,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0477",
   "restaurant_id": "REST048",
   "name": "Let Plate",
   "category": "Beverage",
   "price": 12.82,
   "is_vegetarian": true,
   "is_available": false
 },
 {
   "item_id": "ITEM0478",
   "restaurant_id": "REST048",
   "name": "Long Special",
   "category": "Beverage",
   "price": 14.5,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0479",
   "restaurant_id": "REST048",
   "name": "Inside Dish",
   "category": "Main Course",
   "price": 25.89,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0480",
   "restaurant_id": "REST048",
   "name": "Usually Dish",
   "category": "Appetizer",
   "price": 28.74,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0481",
   "restaurant_id": "REST049",
   "name": "Score Delight",
   "category": "Main Course",
   "price": 9.89,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0482",
   "restaurant_id": "REST049",
   "name": "Add Delight",
   "category": "Dessert",
   "price": 12.43,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0483",
   "restaurant_id": "REST049",
   "name": "Accept Delight",
   "category": "Dessert",
   "price": 28.93,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0484",
   "restaurant_id": "REST049",
   "name": "Decision Dish",
   "category": "Appetizer",
   "price": 6.3,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0485",
   "restaurant_id": "REST049",
   "name": "Hour Plate",
   "category": "Main Course",
   "price": 13.81,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0486",
   "restaurant_id": "REST049",
   "name": "Break Delight",
   "category": "Appetizer",
   "price": 8.72,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0487",
   "restaurant_id": "REST049",
   "name": "Enough Plate",
   "category": "Dessert",
   "price": 13.17,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0488",
   "restaurant_id": "REST049",
   "name": "Drive Delight",
   "category": "Side Dish",
   "price": 21.88,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0489",
   "restaurant_id": "REST049",
   "name": "Particularly Special",
   "category": "Side Dish",
   "price": 22.61,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0490",
   "restaurant_id": "REST049",
   "name": "Glass Plate",
   "category": "Main Course",
   "price": 16.8,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0491",
   "restaurant_id": "REST050",
   "name": "Those Plate",
   "category": "Dessert",
   "price": 13.96,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0492",
   "restaurant_id": "REST050",
   "name": "Thank Special",
   "category": "Side Dish",
   "price": 12.53,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0493",
   "restaurant_id": "REST050",
   "name": "Catch Dish",
   "category": "Dessert",
   "price": 19.48,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0494",
   "restaurant_id": "REST050",
   "name": "Argue Plate",
   "category": "Beverage",
   "price": 26.22,
   "is_vegetarian": false,
   "is_available": false
 },
 {
   "item_id": "ITEM0495",
   "restaurant_id": "REST050",
   "name": "News Plate",
   "category": "Appetizer",
   "price": 10.51,
   "is_vegetarian": true,
   "is_available": true
 },
 {
   "item_id": "ITEM0496",
   "restaurant_id": "REST050",
   "name": "Dog Dish",
   "category": "Beverage",
   "price": 21.35,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0497",
   "restaurant_id": "REST050",
   "name": "The Delight",
   "category": "Main Course",
   "price": 23.27,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0498",
   "restaurant_id": "REST050",
   "name": "Lose Delight",
   "category": "Side Dish",
   "price": 8.37,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0499",
   "restaurant_id": "REST050",
   "name": "Blood Plate",
   "category": "Dessert",
   "price": 11.81,
   "is_vegetarian": false,
   "is_available": true
 },
 {
   "item_id": "ITEM0500",
   "restaurant_id": "REST050",
   "name": "Religious Plate",
   "category": "Main Course",
   "price": 20.81,
   "is_vegetarian": false,
   "is_available": true
 }
]
  ];

  // State variables
  const [selectedRestaurant, setSelectedRestaurant] = useState<string>('');
  const [selectedItems, setSelectedItems] = useState<{ itemId: string; quantity: number }[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('Credit Card');
  const [orderStatus, setOrderStatus] = useState<'success' | 'error' | null>(null);


  const [menuItems, setMenuItems] = useState<typeof hardcodedMenuItems>([]);

  useEffect(() => {
    fetchRestaurants();
    fetchCustomers()
    setMenuItems(hardcodedMenuItems);
  }, []);

  // Filter menu items based on selected restaurant and availability
  const filteredMenuItems = menuItems;

  // Handler to add an item to the order
  const handleAddItem = (itemId: string) => {
    setSelectedItems((prev) => {
      const existingItem = prev.find((item) => item.itemId === itemId);
      if (existingItem) {
        return prev.map((item) =>
          item.itemId === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { itemId, quantity: 1 }];
    });
  };

  // Handler to update the quantity of an item in the order
  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      setSelectedItems((prev) => prev.filter((item) => item.itemId !== itemId));
    } else {
      setSelectedItems((prev) =>
        prev.map((item) =>
          item.itemId === itemId ? { ...item, quantity } : item
        )
      );
    }
  };

  // Calculate subtotal of the order
  const calculateSubtotal = () => {
    return selectedItems.reduce((total, selected) => {
      const item = menuItems?.find((m) => m.item_id === selected.itemId);
      return total + (item?.price || 0) * selected.quantity;
    }, 0);
  };

  // Calculate delivery fee based on subtotal
  const calculateDeliveryFee = () => {
    const subtotal = calculateSubtotal();
    return subtotal > 50 ? 0 : 5; // Free delivery for orders over $50
  };

  // Calculate total amount
  const calculateTotal = () => {
    return calculateSubtotal() + calculateDeliveryFee();
  };

  // Handler to place the order
  const handlePlaceOrder = async () => {
    if (!selectedCustomer || !selectedRestaurant || selectedItems.length === 0) {
      setOrderStatus('error');
      setTimeout(() => setOrderStatus(null), 3000);
      return;
    }

    const customer = customers?.find((c) => c.customer_id === selectedCustomer);
    if (!customer) {
      setOrderStatus('error');
      setTimeout(() => setOrderStatus(null), 3000);
      return;
    }

    const orderData = {
      customer_id: selectedCustomer,
      restaurant_id: selectedRestaurant,
      items: selectedItems,
      total_amount: calculateTotal(),
      delivery_fee: calculateDeliveryFee(),
      payment_method: paymentMethod,
      delivery_address: customer.address,
      status: 'Pending',
    };

    try {
      await createItem('/orders', orderData);
      setOrderStatus('success');
      // Reset form
      setSelectedItems([]);
      setSelectedRestaurant('');
      setSelectedCustomer('');
      setPaymentMethod('Credit Card');
      setTimeout(() => setOrderStatus(null), 3000);
    } catch (error) {
      console.error('Error placing order:', error);
      setOrderStatus('error');
      setTimeout(() => setOrderStatus(null), 3000);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Place Order</h1>

      {/* Order Status Notifications */}
      {orderStatus === 'success' && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Order placed successfully!
        </div>
      )}

      {orderStatus === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error placing order. Please try again.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section: Restaurant Selection and Menu Items */}
        <div className="space-y-4">
          {/* Select Restaurant */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Restaurant</label>
            {loadingRestaurants ? (
              <p>Loading restaurants...</p>
            ) : errorRestaurants ? (
              <p className="text-red-500">Error: {errorRestaurants}</p>
            ) : (
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                value={selectedRestaurant}
                onChange={(e) => setSelectedRestaurant(e.target.value)}
              >
                <option value="">Select a restaurant</option>
                {restaurants?.map((restaurant) => (
                  <option key={restaurant.restaurant_id} value={restaurant.restaurant_id}>
                    {restaurant.name} - {restaurant.cuisine}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Menu Items */}
          {selectedRestaurant && (
            <div>
              <h3 className="text-lg font-medium">Menu Items</h3>
              {filteredMenuItems.length === 0 ? (
                <p>No available menu items for this restaurant.</p>
              ) : (
                <div className="space-y-2">
                  {filteredMenuItems.map((item) => {
                    const selectedItem = selectedItems.find(
                      (selected) => selected.itemId === item.item_id
                    );
                    return (
                      <div
                        key={item.item_id}
                        className="flex justify-between items-center p-2 bg-white rounded shadow"
                      >
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            ${item?.price?.toFixed(2)}
                            {item?.is_vegetarian && (
                              <span className="ml-2 text-green-600">(Vegetarian)</span>
                            )}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {selectedItem ? (
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() =>
                                  handleUpdateQuantity(item.item_id, selectedItem.quantity - 1)
                                }
                                className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                              >
                                -
                              </button>
                              <span>{selectedItem.quantity}</span>
                              <button
                                onClick={() =>
                                  handleUpdateQuantity(item.item_id, selectedItem.quantity + 1)
                                }
                                className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                              >
                                +
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => handleAddItem(item.item_id)}
                              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                            >
                              Add
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Section: Order Summary and Customer Details */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Order Summary</h3>

          <div className="space-y-4">
            {/* Select Customer */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Select Customer</label>
              {loadingCustomers ? (
                <p>Loading customers...</p>
              ) : errorCustomers ? (
                <p className="text-red-500">Error: {errorCustomers}</p>
              ) : (
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                  value={selectedCustomer}
                  onChange={(e) => setSelectedCustomer(e.target.value)}
                >
                  <option value="">Select a customer</option>
                  {customers?.map((customer) => (
                    <option key={customer.customer_id} value={customer.customer_id}>
                      {customer.name} - {customer.phone}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Payment Method</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="Credit Card">Credit Card</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="UPI">UPI</option>
              </select>
            </div>

            {/* Selected Items */}
            <div className="space-y-2">
              {selectedItems.map((selected) => {
                const item = menuItems?.find((m) => m.item_id === selected.itemId);
                return (
                  <div key={selected.itemId} className="flex justify-between">
                    <span>
                      {item?.name} x {selected.quantity}
                    </span>
                    <span>${((item?.price || 0) * selected.quantity)?.toFixed(2)}</span>
                  </div>
                );
              })}
            </div>

            {/* Order Totals */}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${calculateSubtotal()?.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee:</span>
                <span>${calculateDeliveryFee()?.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>${calculateTotal()?.toFixed(2)}</span>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              disabled={!selectedCustomer || selectedItems.length === 0}
              className={`w-full py-2 rounded ${
                !selectedCustomer || selectedItems.length === 0
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-green-500 text-white hover:bg-green-600'
              }`}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
