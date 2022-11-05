const axios = require("axios");

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtZW11ZnJkajRhdGIweGVlMy51cy5hdXRoMC5jb20vIn0..L2Fx_R9iCLfbrswx.czDwswNC7B7tyoQSdPNn31d3-TzhtwUhSvSExTth4nZtwIpLk52x7_qvu_uqadzPULezQYupPfXkj8FJK55tWp8IoOoWKmpNpHAUrxVxEBXeTxMAbd8JGpJAsMT3zJhvfvusS15Sivi0SxW9a2LJuLLddnOTMMitHerSa0vVVb06VLwl2vh5yWVw56CCisrKtZ3H4pBO5rIzzHP5210RzVsCrGyVIAA-iCCkWF84ZSP0mTITeBBOOcY_wAgHg-jQ09Po7zUFXRImhpipoUNavwxwT-QKIXhEhryJUtOKdRSN_ZNbu_rvO_wGLsqg5Lf-_BydoQwj5k7K1OucpBksWbdo.BFW31GO3TfYFc5aQSq920g",
  },
};

axios
  .get("http://localhost:5000/api/post/getAllPosts", options)
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
