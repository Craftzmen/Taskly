import React from 'react'
import { Routes as ReactRoutes, Route, useNavigate } from 'react-router-dom';

import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

import AuthSignIn from './auth/AuthSignIn';
import AuthSignUp from './auth/AuthSignUp';
import Home from './Home/Home';
import Tasks_Issues from './Tasks/Tasks_Issues';

const AppProviderWithRoutes = () => {
  const AUTH_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY

  if (!AUTH_KEY) {
    throw new Error(`Missing Auth Key , Check .env file for errors or file where you are accessing it.`);
  }

  const clerkPubKey = AUTH_KEY;
  const navigate = useNavigate();

  return (
    <div>
      <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)} >
        <ReactRoutes>
          <Route path="/sign-in/*" element={<AuthSignIn routing="path" path="/sign-in" />} />
          <Route path="/sign-up/*" element={<AuthSignUp routing="path" path="/sign-up" />} />
          <Route path="/"
            element={
              <>
                <SignedIn>
                  <Home />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          >
            <Route path='tasks_&_issues' element={<Tasks_Issues/>} />
            <Route path='scheduling' element={<h1>Scheduling</h1>} />
          </Route>
        </ReactRoutes>
      </ClerkProvider>
    </div>
  );
}

export default AppProviderWithRoutes;
