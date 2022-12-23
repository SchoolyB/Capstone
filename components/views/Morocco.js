import html from "html-literal";
import flag from "../../assets/images/mar.png";
export default state => html`
  <div class="countryInfo" id="moroccoInfo">
    <div class="metaDataContainer">
      <img
        class="shortCountryInfoFlag"
        id="moroccoInfoFlag"
        src=${flag}
        alt="The
        Flag
        of
        Morocco"
      />
      <div class="genInformationContainer">
        <
        <div class="genInformationContainer">
          <p class="genInfoRegion">
            Region: ${state.info.region}<br />
            Subregion: ${state.info.subregion}
          </p>
          <p class="genInfoSubRegion"></p>
          <p class="genInfoCapitolCity">
            The Capitol of ${state.info.name} is: ${state.info.Capital}
          </p>
          <p>National Population: ${state.info.population} approx.</p>
          <p class="genInfoISOCodes ">
            ${state.info.name}'s Alpha 2 code is: ${state.info.Alpha2Code}<br />
            ${state.info.name}'s Alpha 3 code is: ${state.info.Alpha3Code}
          </p>
          <p class="genInfoCurrency">
            The Currency of Australia is ${state.info.Currency}
          </p>
          <p class="genInfoCallingCodes">
            ${state.info.name}'s calling code is ${state.info.callingCodes}
          </p>
          <p class="genInfoTimezones">
            Timezones: ${state.info.timezones}
          </p>
        </div>
      </div>
      <div>
        <h1 class="countryNameHeader">Morocco</h1>
        <h2 class="nativeName">المملكة المغربية</h2>
      </div>
      <section class="history topic" id="moroccoHistory">
        <h3>
          History
        </h3>
        <p>
          ${state.history}
        </p>
      </section>

      <section class="government, topic" id="moroccoGovernment">
        <h3>
          Government
        </h3>
        <p>
          ${state.government}
        </p>
      </section>
      <section class="economy topic" id="moroccoEconomy">
        <h3>
          Economy
        </h3>
        <p>
          ${state.economy}
        </p>
      </section>

      <section class="demographics topic" id="moroccoDemographics">
        <h3>
          Demographics
        </h3>
        <p>
          ${state.demographics}
        </p>
      </section>

      <section class="culture topic" id="moroccoCulture">
        <h3>
          Culture
        </h3>
        <p>
          ${state.culture}
        </p>
      </section>

      <section class="currentEvents topic" id="moroccoCurrentEvents">
        <h3>
          Current Events
        </h3>
        <p>
        <h6>
        ${state.headlines[0]}
      </h6>
      <h6>
        ${state.headlines[1]}
      </h6>
      <h6>
        ${state.headlines[2]}
      </h6>
      <h6>
        ${state.headlines[3]}
        </p>
      </section>
    </div>
  </div>
`;
