import { Link } from "react-router-dom";

function Page() {
  return (
    <div>
      <h1>Example of Vault Integration</h1>
      <p>
        This website contains many working examples third party applications
        to integrate with ZK Iden3 Identity protocol via <a href={'https://0xpolygonid.github.io/tutorials/'}>PolygonID SDK</a>.
      </p>
      <div>
        <ol>
          <li>
            <Link to="/examples/group-proof">
              Prove and Get a KYC Credential
            </Link>
          </li>
          <li>
            <Link to="/examples/signature-proof">
              Prove and Get an Email Address Credential
            </Link>
          </li>
          <li>
            <Link to="/examples/add-pcd">Prove and Get an Ethereum Address Credential</Link>
          </li>
          {/*<li>*/}
          {/*  <Link to="/examples/get-without-proving">*/}
          {/*    Get a PCD from Zupass Without Proving from Zupass*/}
          {/*  </Link>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*  <Link to="/examples/zk-eddsa-event-ticket-proof">*/}
          {/*    Prove and Get a ZKEdDSA Event Ticket Proof from Zupass*/}
          {/*  </Link>*/}
          {/*</li>*/}
        </ol>
      </div>
    </div>
  );
}

export default Page;
