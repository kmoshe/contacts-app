/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from '.,/../../src/store/configureStore';
import configureStore from 'redux-mock-store';
import { render, fireEvent, act } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { default as ContactList } from '../';
import { ApiResponse, Contact } from '../../../types/Contact';
import mockAxios from 'jest-mock-axios';
import { RouteProps } from '../../app/types';

const mockStore = configureAppStore()
jest.mock('axios');

describe('Contact List', () => {

});
