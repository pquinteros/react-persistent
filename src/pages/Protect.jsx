import { SignedOut, Protect, useAuth } from '@clerk/clerk-react'

export default function Protected() {
  const { sessionClaims } = useAuth();
  const isAdmin = sessionClaims?.metadata?.role === 'admin';
  return (
    <>
    <SignedOut>
      <h1 className="text-xl font-bold mb-6">Access Denied</h1>
      <p>You must be logged in to view this page</p>
    </SignedOut>

    <Protect
        fallback={
          <div>
            <h1 className="text-xl font-bold mb-6">Access Denied</h1>
            <p>You need admin privileges to view this content.</p>
          </div>
        }
      >
        {isAdmin && (
          <div>
            <h1 className="text-xl font-bold mb-6">Admin Content</h1>
            <p>This content is only visible to admin users.</p>
          </div>
          )}
      </Protect>
    </>
  )
}