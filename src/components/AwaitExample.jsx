import React, { Suspense } from "react";
import {
  Await,
  defer,
  useAsyncError,
  useAsyncValue,
  useLoaderData,
} from "react-router";

function AwaitExample() {
  const loaderData = useLoaderData();
  console.log(loaderData);
  return (
    <>
      <div>Await Example</div>{" "}
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Await
            resolve={loaderData.DeferredData}
            errorElement={<ErrorElement />}
          >
            <AwaitComp />
          </Await>
        </Suspense>
      </div>
    </>
  );
}

function ErrorElement() {
  const error = useAsyncError();
  return <div>Hey This is the error {error}</div>;
}

export const AwaitLoader = async ({ request, params }) => {
  const DelayedData = new Promise((res, rej) =>
    setTimeout(() => rej("Delayed data rejected successfully"), 5000)
  );
  return defer({
    DeferredData: DelayedData,
  });
};
function AwaitComp({}) {
  const values = useAsyncValue();
  const error = useAsyncError();
  console.log("AwaitComp", values);
  return (
    <div>
      Hey This is a AwaitComp <div>{values}</div>
      <div>{error && "Error is displayed" + error}</div>
    </div>
  );
}
export default AwaitExample;
