"use server";
import * as hubspot from "@hubspot/api-client";

const hubspotClient = new hubspot.Client({
  accessToken: process.env.HUBSPOT_API_TOKEN,
});

export const createHubspotContact = async (props: {
  email: string;
  resource: string;
}) => {
  const properties = {
    email: props.email,
    resource: props.resource,
  };

  try {
    const apiResponse = await hubspotClient.crm.contacts.basicApi.create({
      associations: [],
      properties,
    });
    // console.log(JSON.stringify(apiResponse, null, 2));
  } catch (e: any) {
    e.message === "HTTP request failed"
      ? console.error(JSON.stringify(e.response, null, 2))
      : console.error(e);
  }
};
