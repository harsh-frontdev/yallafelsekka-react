import axios from "axios";
const baseUrl = "http://localhost/yallafelsekka-react-wordpress/graphql";
const headers = {
  "content-type": "application/json",
};

export default class GraphAPI {
  static themeOptions() {
    const themeQuery = `
    query ThemeOptions {
      themeOptions {
        themeSettings {
          headerLogo {
            sourceUrl
          }
          footerLogo {
            sourceUrl
          }
          footerAddress
          footerEmail
        }
      }
    }
    `;

    const graphqlQuery = {
      operationName: "ThemeOptions",
      query: themeQuery,
    };

    return axios({
      url: baseUrl,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }

  static homeOptions() {
    const homeQuery = `
    query HomeOptions {
      page(id: "/", idType: URI) {
        homePage {
          homeAboutButtonLink
          homeAboutButtonText
          homeAboutContent
          homeAboutCounters {
            homeAboutNumbers
            homeAboutTitle
          }
          homeAboutTitle
          homeBannerImage {
            sourceUrl
          }
          homeBannerSubtitle
          homeBannerTitle
          homeDeliverRegisterButtonLink
          homeDeliverRegisterButtonTitle
          homeDeliverRegisterContent
          homeDeliverRegisterImage {
            sourceUrl
          }
          homeDeliverRegisterOverlapImage {
            sourceUrl
          }
          homeDeliverRegisterTitle
          homeServiceBlocks {
            homeServiceBlockImage {
              sourceUrl
            }
            homeServiceBlockTitle
          }
          homeServiceButtonLink
          homeServiceButtonTitle
          homeServiceTitle
          homeYfsCaptainBlocks {
            homeYfsCaptainBlockImage {
              sourceUrl
            }
            homeYfsCaptainBlockTitle
          }
          homeYfsCaptainButtonLink
          homeYfsCaptainButtonTitle
          homeYfsCaptainSubtitle
          homeYfsCaptainTitle
        }
      }
    }
    `;
    const graphqlQuery = {
      operationName: "HomeOptions",
      query: homeQuery,
    };

    return axios({
      url: baseUrl,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    });
  }
}
