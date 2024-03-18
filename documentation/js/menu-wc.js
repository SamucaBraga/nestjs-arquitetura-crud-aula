'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-arquitetura-crud-aula documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-821887a67ce64b56b1a2c202464c883da0ebab3d92c5f65cf0c5c51ecda32bd2d5abfced82ad9b628d7bdf1189579cf57c76ce40c5f9b5e3f8bf557dac220279"' : 'data-bs-target="#xs-controllers-links-module-AppModule-821887a67ce64b56b1a2c202464c883da0ebab3d92c5f65cf0c5c51ecda32bd2d5abfced82ad9b628d7bdf1189579cf57c76ce40c5f9b5e3f8bf557dac220279"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-821887a67ce64b56b1a2c202464c883da0ebab3d92c5f65cf0c5c51ecda32bd2d5abfced82ad9b628d7bdf1189579cf57c76ce40c5f9b5e3f8bf557dac220279"' :
                                            'id="xs-controllers-links-module-AppModule-821887a67ce64b56b1a2c202464c883da0ebab3d92c5f65cf0c5c51ecda32bd2d5abfced82ad9b628d7bdf1189579cf57c76ce40c5f9b5e3f8bf557dac220279"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-821887a67ce64b56b1a2c202464c883da0ebab3d92c5f65cf0c5c51ecda32bd2d5abfced82ad9b628d7bdf1189579cf57c76ce40c5f9b5e3f8bf557dac220279"' : 'data-bs-target="#xs-injectables-links-module-AppModule-821887a67ce64b56b1a2c202464c883da0ebab3d92c5f65cf0c5c51ecda32bd2d5abfced82ad9b628d7bdf1189579cf57c76ce40c5f9b5e3f8bf557dac220279"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-821887a67ce64b56b1a2c202464c883da0ebab3d92c5f65cf0c5c51ecda32bd2d5abfced82ad9b628d7bdf1189579cf57c76ce40c5f9b5e3f8bf557dac220279"' :
                                        'id="xs-injectables-links-module-AppModule-821887a67ce64b56b1a2c202464c883da0ebab3d92c5f65cf0c5c51ecda32bd2d5abfced82ad9b628d7bdf1189579cf57c76ce40c5f9b5e3f8bf557dac220279"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-b43a02478ac0cb3fea31a150ad6e4fcd7af751c408921c8c978abe6469db372a706474befbfa87638bb4b2351686a44e0956bb6a3bf5f15afae76e785b75f3db"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-b43a02478ac0cb3fea31a150ad6e4fcd7af751c408921c8c978abe6469db372a706474befbfa87638bb4b2351686a44e0956bb6a3bf5f15afae76e785b75f3db"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-b43a02478ac0cb3fea31a150ad6e4fcd7af751c408921c8c978abe6469db372a706474befbfa87638bb4b2351686a44e0956bb6a3bf5f15afae76e785b75f3db"' :
                                            'id="xs-controllers-links-module-AuthModule-b43a02478ac0cb3fea31a150ad6e4fcd7af751c408921c8c978abe6469db372a706474befbfa87638bb4b2351686a44e0956bb6a3bf5f15afae76e785b75f3db"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-b43a02478ac0cb3fea31a150ad6e4fcd7af751c408921c8c978abe6469db372a706474befbfa87638bb4b2351686a44e0956bb6a3bf5f15afae76e785b75f3db"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-b43a02478ac0cb3fea31a150ad6e4fcd7af751c408921c8c978abe6469db372a706474befbfa87638bb4b2351686a44e0956bb6a3bf5f15afae76e785b75f3db"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-b43a02478ac0cb3fea31a150ad6e4fcd7af751c408921c8c978abe6469db372a706474befbfa87638bb4b2351686a44e0956bb6a3bf5f15afae76e785b75f3db"' :
                                        'id="xs-injectables-links-module-AuthModule-b43a02478ac0cb3fea31a150ad6e4fcd7af751c408921c8c978abe6469db372a706474befbfa87638bb4b2351686a44e0956bb6a3bf5f15afae76e785b75f3db"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-3339b3fb4ba6edec8c881098bbdaedc9c52e910f6e4d60dd853ffcddc7209c0d0ae7333ee3b88f0b65f9c2b20fd7e2a96ea3418becf3869393948b97a08ff282"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-3339b3fb4ba6edec8c881098bbdaedc9c52e910f6e4d60dd853ffcddc7209c0d0ae7333ee3b88f0b65f9c2b20fd7e2a96ea3418becf3869393948b97a08ff282"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-3339b3fb4ba6edec8c881098bbdaedc9c52e910f6e4d60dd853ffcddc7209c0d0ae7333ee3b88f0b65f9c2b20fd7e2a96ea3418becf3869393948b97a08ff282"' :
                                            'id="xs-controllers-links-module-PostsModule-3339b3fb4ba6edec8c881098bbdaedc9c52e910f6e4d60dd853ffcddc7209c0d0ae7333ee3b88f0b65f9c2b20fd7e2a96ea3418becf3869393948b97a08ff282"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-3339b3fb4ba6edec8c881098bbdaedc9c52e910f6e4d60dd853ffcddc7209c0d0ae7333ee3b88f0b65f9c2b20fd7e2a96ea3418becf3869393948b97a08ff282"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-3339b3fb4ba6edec8c881098bbdaedc9c52e910f6e4d60dd853ffcddc7209c0d0ae7333ee3b88f0b65f9c2b20fd7e2a96ea3418becf3869393948b97a08ff282"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-3339b3fb4ba6edec8c881098bbdaedc9c52e910f6e4d60dd853ffcddc7209c0d0ae7333ee3b88f0b65f9c2b20fd7e2a96ea3418becf3869393948b97a08ff282"' :
                                        'id="xs-injectables-links-module-PostsModule-3339b3fb4ba6edec8c881098bbdaedc9c52e910f6e4d60dd853ffcddc7209c0d0ae7333ee3b88f0b65f9c2b20fd7e2a96ea3418becf3869393948b97a08ff282"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' :
                                        'id="xs-injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-3f567c1ae42e8ff0cd7204e9f707586df9c0bf5285f25357fcaa936e0c629fa612de0d94ffdc773af2e51f94aff35fdd1e6fc2ba012172e2f94dfd029e75c197"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-3f567c1ae42e8ff0cd7204e9f707586df9c0bf5285f25357fcaa936e0c629fa612de0d94ffdc773af2e51f94aff35fdd1e6fc2ba012172e2f94dfd029e75c197"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-3f567c1ae42e8ff0cd7204e9f707586df9c0bf5285f25357fcaa936e0c629fa612de0d94ffdc773af2e51f94aff35fdd1e6fc2ba012172e2f94dfd029e75c197"' :
                                            'id="xs-controllers-links-module-UsersModule-3f567c1ae42e8ff0cd7204e9f707586df9c0bf5285f25357fcaa936e0c629fa612de0d94ffdc773af2e51f94aff35fdd1e6fc2ba012172e2f94dfd029e75c197"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-3f567c1ae42e8ff0cd7204e9f707586df9c0bf5285f25357fcaa936e0c629fa612de0d94ffdc773af2e51f94aff35fdd1e6fc2ba012172e2f94dfd029e75c197"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-3f567c1ae42e8ff0cd7204e9f707586df9c0bf5285f25357fcaa936e0c629fa612de0d94ffdc773af2e51f94aff35fdd1e6fc2ba012172e2f94dfd029e75c197"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-3f567c1ae42e8ff0cd7204e9f707586df9c0bf5285f25357fcaa936e0c629fa612de0d94ffdc773af2e51f94aff35fdd1e6fc2ba012172e2f94dfd029e75c197"' :
                                        'id="xs-injectables-links-module-UsersModule-3f567c1ae42e8ff0cd7204e9f707586df9c0bf5285f25357fcaa936e0c629fa612de0d94ffdc773af2e51f94aff35fdd1e6fc2ba012172e2f94dfd029e75c197"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ConflictError.html" data-type="entity-link" >ConflictError</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DatabaseError.html" data-type="entity-link" >DatabaseError</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginRequestBody.html" data-type="entity-link" >LoginRequestBody</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotFoundError.html" data-type="entity-link" >NotFoundError</a>
                            </li>
                            <li class="link">
                                <a href="classes/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="classes/UnauthorizedError.html" data-type="entity-link" >UnauthorizedError</a>
                            </li>
                            <li class="link">
                                <a href="classes/UniqueConstraintError.html" data-type="entity-link" >UniqueConstraintError</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostDto.html" data-type="entity-link" >UpdatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ConflictInterceptor.html" data-type="entity-link" >ConflictInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseInterceptor.html" data-type="entity-link" >DatabaseInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotFoundInterceptor.html" data-type="entity-link" >NotFoundInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UnauthorizedInterceptor.html" data-type="entity-link" >UnauthorizedInterceptor</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthRequest.html" data-type="entity-link" >AuthRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserPayload.html" data-type="entity-link" >UserPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserToken.html" data-type="entity-link" >UserToken</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});